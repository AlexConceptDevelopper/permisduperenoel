package permis;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
public class PermisApplication {

	public static void main(String[] args) {
		SpringApplication.run(PermisApplication.class, args);
	}
}