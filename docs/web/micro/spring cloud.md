# spring cloud

## spring cloud stream (SCS)

> 官方文档地址：`https://spring.io/projects/spring-cloud-stream`

### 为什么使用MQ?

MQ的作用：
1. 异步
2. 解耦
3. 削峰

以队列的形式来存储消息

MQ的困惑：
MQ产品比较多，如何选择MQ
kafka
rabbit MQ
rocket MQ


### 概述

Spring Cloud Stream is a framework for building highly scalable event-driven microservices connected with shared messaging systems.

The framework provides a flexible programming model built on already established and familiar Spring idioms and best practices, including support for persistent pub/sub semantics, consumer groups, and stateful partitions.

持久发布/订阅语义，消费者组，有状态分区

### 解决什么问题？为什么要使用？

- 连接Spring和外部消息系统，可以使用Spring的框架形式来使用消息队列
- 提供了中间组件来对外部消息队列进行抽象，解耦。 (AKA The Binder Abstraction)   

### SCS三神器

- Binder 负责集成外部消息系统的组件
- Binding 由Binder创建，负责沟通外部消息系统、消息发送者和消息消费者的桥梁
- Message 消息内容的简单数据结构