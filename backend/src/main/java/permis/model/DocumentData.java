package permis.model;

import jakarta.persistence.*;

@Entity
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

    // Getters et Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public Order getOrder() { return order; }
    public void setOrder(Order order) { this.order = order; }

    public String getChildName() { return childName; }
    public void setChildName(String childName) { this.childName = childName; }

    public Integer getChildAge() { return childAge; }
    public void setChildAge(Integer childAge) { this.childAge = childAge; }

    public String getCity() { return city; }
    public void setCity(String city) { this.city = city; }

    public String getBehaviorNote() { return behaviorNote; }
    public void setBehaviorNote(String behaviorNote) { this.behaviorNote = behaviorNote; }

    public Integer getToyRoomScore() { return toyRoomScore; }
    public void setToyRoomScore(Integer toyRoomScore) { this.toyRoomScore = toyRoomScore; }

    public String getBedtimeSpeed() { return bedtimeSpeed; }
    public void setBedtimeSpeed(String bedtimeSpeed) { this.bedtimeSpeed = bedtimeSpeed; }

    public String getSerialNumber() { return serialNumber; }
    public void setSerialNumber(String serialNumber) { this.serialNumber = serialNumber; }

    public String getBackMessage() { return backMessage; }
    public void setBackMessage(String backMessage) { this.backMessage = backMessage; }

    public String getAvatarUrl() { return avatarUrl; }
    public void setAvatarUrl(String avatarUrl) { this.avatarUrl = avatarUrl; }
}