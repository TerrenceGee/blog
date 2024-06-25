---
sidebar_label: 'SpringCloudAlibaba'
sidebar_position: 1
---

# SpringCloudAlibaba

从SOA架构时代演进到微服务时代，Spring推出了自己的产品SpringCloud体系，阿里巴巴基于SpringCloud也提出了一套体系，且更加方便使用（无代码的Nacos，注解化的OpenFeign，图形化的sentinel等等），阿里巴巴已经成为独立项目搭建首选的微服务开发体系。

## SpringCloud与SpringCloudAlibaba对比

| 组件 | SpringCloud | SpringCloudAlibaba |
| --- | --- | --- |
| 服务注册与发现 | Eureka | nacos,zk|
| 配置中心|Config|Nacos|
| 服务调用 | Feign|OpenFeign, Dubbo |
| 负载均衡| Ribbon|LoadBalancer |
| 熔断降级| Hystrix|Sentinel |
| 限流| |Sentinel |
| 服务监控| | |
| 链路追踪| Sleuth&Zipkin| SkyWalking|
| 网关|Zuul |Gateway |
| 分布式事务 | | Seata|
| 分布式任务调度| | SchedulerX|
| 消息中间件| RabbitMQ| RocketMQ|
