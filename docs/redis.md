# redis

## 特点

+ 内存数据库，速度快，也支持数据的持久化
+ 不仅仅支持简单的key-value 类型的数据，同时还提供 Lists, Hashed, Sets, Sorted Sets 等多种数据结构的储存
+ Redis 支持数据的备份 （master-slave）与集群（分片存储），以及拥有哨兵监控机制
+ 支持事务

## ttl

TTL（Time To Live）是Redis中一项用于设置键的生存时间的功能。它表示键在存活的时间，过期后将自动被系统删除。

TTL的含义和应用如下：

键的生存时间：通过使用TTL，可以为键设置一个特定的生存时间，让键在指定的时间之后自动被删除。这对于一些需要暂时存储数据的场景很有用，例如缓存、会话管理等。

缓存：通过为缓存中的键设置TTL，可以控制缓存的过期时间。当缓存的键过期时，下次访问时将重新获取最新的数据，并重新放入缓存中。

会话管理：在某些情况下，可以将用户的会话信息存储在Redis中，并为其设置TTL。当用户长时间不活动或注销时，会话信息会自动过期并被删除。

限流器：使用TTL可以实现简单的限流机制。例如，每秒只允许执行一定数量的操作，可以在执行操作之前检查相关的键是否存在以及其TTL是否大于设定的阈值。

数据清理：对于一些临时性的数据，可以通过设置TTL来自动清理，避免数据过于堆积而导致存储空间的浪费。

需要注意的是，TTL并不是实时生效的，而是通过Redis的惰性删除机制来实现。也就是说，过期键并不会立即被删除，而是在访问该键时检测到过期后才会被删除。因此，在使用TTL时需要注意系统的内存使用情况和过期键的自动删除机制。

## 多个db

在Redis中有多个数据库（DB）是为了让用户可以将数据按照不同的逻辑进行划分和管理。每个Redis实例可以包含多个数据库，通过编号从0开始区分，总共可以有16个数据库（编号0-15）。

以下是一些使用多个数据库的常见情况：

数据隔离：将不同类型的数据存储在不同的数据库中，可以实现数据的隔离和分层。例如，可以将用户信息存储在一个数据库中，将缓存数据存储在另一个数据库中，使得不同类型的数据之间相互独立。

测试和开发环境分离：可以使用不同的数据库来分离测试环境和生产环境的数据。这样可以在测试过程中对数据进行操作而不影响生产环境的数据。

数据备份和恢复：可以将不同时间点的数据备份存储在不同的数据库中，以便在需要时进行恢复。这样可以方便地管理和维护多个备份副本。

并发控制：通过将任务或数据分配到不同的数据库中，可以减少并发读写的竞争，提高性能和吞吐量。例如，可以将读取密集型的任务放在一个数据库中，将写入密集型的任务放在另一个数据库中，从而避免冲突和竞争。

需要注意的是，虽然Redis支持多个数据库，但并不建议过度使用它们。在实际应用中，通常只使用默认的第0个数据库即可满足大多数需求。过多地使用多个数据库可能会增加复杂性，并带来一些额外的管理和维护成本。

## 主从分离

Redis主从分离是指将一个Redis服务拆分为一个主节点和多个从节点。主节点用于处理写操作，从节点用于处理读操作。主节点会将自己的数据同步到从节点上，使得从节点具备与主节点一致的数据。这样可以提高系统的读写性能和可扩展性。

哨兵模式是一种用于监控和管理Redis主从节点的机制。在哨兵模式下，有一个或多个哨兵进程会监控各个Redis节点的状态，当发现主节点宕机或失去连接时，哨兵会自动将某个从节点晋升为新的主节点，然后通知其他从节点更新自己的主节点信息。这样可以实现Redis的高可用性，即使主节点出现故障，系统仍然可以正常工作。

哨兵模式还可以进行故障转移、自动切换等功能。当主节点恢复后，哨兵会自动将其设置为从节点，并将新的主节点信息通知给其他从节点。这样可以实现Redis的自动化故障恢复和负载均衡。同时，哨兵模式还可以支持配置文件的动态更新，方便对Redis集群进行调整和管理。

## 项目应用

### 认证中心

验证码失效时间设置在redis 中

单点登录，token存redis，便于多个服务之间获取登录状态

## 数据类型

### sorted set

在游戏中使用Sorted Set来存储玩家的积分排行榜，成员(Member)可以是玩家的唯一标识符，而分数(Score)则表示玩家的积分。这样就可以根据积分对玩家进行排名，并根据积分范围来获取一定范围内的排名玩家。
