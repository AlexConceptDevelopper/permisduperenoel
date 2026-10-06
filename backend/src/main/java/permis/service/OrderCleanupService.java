package permis.service;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import permis.model.Order; // Ajuste le package de ton entité Order si besoin
import permis.repository.global.OrderRepository;

@Service
public class OrderCleanupService {

    private OrderRepository orderRepository;

    // S'exécute tous les jours à minuit pile (00:00:00)
    @Scheduled(cron = "0 0 0 * * *")
    @Transactional
    public void purgeOldDocumentData() {
        // Supprime les documentData pour les commandes datant de plus de 24 heures
        LocalDateTime limitDate = LocalDateTime.now().minusHours(24);
        
        List<Order> ordersToClean = orderRepository.findByDocumentDataIsNotNullAndCreatedAtBefore(limitDate);
        
        for (Order order : ordersToClean) {
            order.setDocumentData(null);
            orderRepository.save(order);
        }
        
        if (!ordersToClean.isEmpty()) {
            System.out.println("Nettoyage RGPD : " + ordersToClean.size() + " document(s) purgé(s).");
        }
    }
}