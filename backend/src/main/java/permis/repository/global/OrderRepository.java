package permis.repository.global;

import permis.model.Order;
import permis.repository.GenericRepository;
import java.util.Optional;

public interface OrderRepository extends GenericRepository<Order, Long> {
    Optional<Order> findByStripeSessionId(String stripeSessionId);
}