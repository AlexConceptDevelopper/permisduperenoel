package permis.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CreateOrderRequest {
    private String customerEmail;
    private DocumentDataDto documentData; // Contient toutes les infos de l'enfant pour générer le pack
}