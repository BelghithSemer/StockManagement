package stock.example.companyy.entities;


import jakarta.persistence.Id;
import lombok.*;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "users")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@ToString
public class User {

    @Id
    private int id;

    private String username;
    private String email;
    private String password;
    private int numtel;

    private Role role;


}
