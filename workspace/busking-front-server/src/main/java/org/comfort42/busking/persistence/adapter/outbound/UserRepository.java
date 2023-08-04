package org.comfort42.busking.persistence.adapter.outbound;

import jakarta.persistence.EntityManager;
import jakarta.persistence.NoResultException;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;
import org.comfort42.busking.application.domain.model.User;
import org.comfort42.busking.application.port.inbound.RegisterUserCommand;
import org.comfort42.busking.application.port.outbound.LoadUserPort;
import org.comfort42.busking.application.port.outbound.RegisterUserPort;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
class UserRepository implements RegisterUserPort, LoadUserPort {

    private final UserMapper userMapper = UserMapper.getInstance();

    @PersistenceContext
    private EntityManager em;

    @Override
    @Transactional
    public User regitserUser(final RegisterUserCommand cmd) {
        final UserJpaEntity userJpaEntity = new UserJpaEntity(
                UUID.randomUUID(),
                cmd.getUsername(),
                cmd.getPassword(),
                cmd.getRealName(),
                cmd.getEmail(),
                cmd.getPhoneNumber(),
                cmd.getCompany().value(),
                cmd.getRole(),
                null
        );

        em.persist(userJpaEntity);
        return userMapper.mapToDomainEntity(userJpaEntity);
    }

    @Override
    public Optional<User> loadUserById(final User.UserId userId) {
        try {
            final UserJpaEntity jpaEntity = em
                    .createQuery("SELECT u FROM UserJpaEntity  u WHERE u.id=:userId", UserJpaEntity.class)
                    .setParameter("userId", userId.value())
                    .getSingleResult();
            return Optional.of(userMapper.mapToDomainEntity(jpaEntity));
        }
        catch (NoResultException e) {
            return Optional.empty();
        }
    }

    @Override
    public Optional<User> loadUserByUsername(final String username) {
        final UserJpaEntity jpaEntity = em
                .createQuery("SELECT u FROM UserJpaEntity  u WHERE u.username=:username", UserJpaEntity.class)
                .setParameter("username", username)
                .getSingleResult();
        return Optional.of(userMapper.mapToDomainEntity(jpaEntity));
    }
}
