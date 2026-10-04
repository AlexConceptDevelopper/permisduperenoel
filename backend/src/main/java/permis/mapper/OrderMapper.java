package permis.mapper;

import org.springframework.stereotype.Component;
import permis.dto.CreateOrderRequest;
import permis.dto.DocumentDataDto;
import permis.model.DocumentData;
import permis.model.Order;

@Component
public class OrderMapper {

    public Order toEntity(CreateOrderRequest request) {
        if (request == null) {
            return null;
        }

        // 1. Création de la commande
        Order order = new Order();
        order.setCustomerEmail(request.getCustomerEmail());
        order.setAmount(1.99);
        order.setStatus("PENDING");

        // 2. Mapping des données du document si présentes
        if (request.getDocumentData() != null) {
            DocumentDataDto dto = request.getDocumentData();
            DocumentData docData = new DocumentData();
            
            docData.setChildName(dto.getChildName());
            docData.setChildAge(dto.getChildAge());
            docData.setCity(dto.getCity());
            docData.setBehaviorNote(dto.getBehaviorNote());
            docData.setToyRoomScore(dto.getToyRoomScore());
            docData.setBedtimeSpeed(dto.getBedtimeSpeed());
            docData.setSerialNumber(dto.getSerialNumber());
            docData.setBackMessage(dto.getBackMessage());
            docData.setAvatarUrl(dto.getAvatarUrl());

            order.setDocumentData(docData);
        }

        return order;
    }
}