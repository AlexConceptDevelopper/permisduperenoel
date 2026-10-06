package permis.repository.global;

import permis.model.Order;
import permis.repository.GenericRepository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

public interface OrderRepository extends GenericRepository<Order, Long> {
    Optional<Order> findByStripeSessionId(String stripeSessionId);

    List<Order> findByDocumentDataIsNotNullAndCreatedAtBefore(LocalDateTime date);
}