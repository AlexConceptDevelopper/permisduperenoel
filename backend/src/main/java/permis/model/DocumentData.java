package permis.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "document_data")
public class DocumentData {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    @JoinColumn(name = "order_id", nullable = false)
    private Order order;

    private String childName;
    private Integer childAge;
    private String childGender;
    private String city;
    
    @Column(columnDefinition = "TEXT")
    private String behaviorNote;
    
    private Integer toyRoomScore;
    private String bedtimeSpeed;
    private String serialNumber;
    
    @Column(columnDefinition = "TEXT")
    private String backMessage;
    
    @Column(columnDefinition = "TEXT")
    private String avatarUrl;

    @Column(columnDefinition = "TEXT")
    private String santaLetter;
}