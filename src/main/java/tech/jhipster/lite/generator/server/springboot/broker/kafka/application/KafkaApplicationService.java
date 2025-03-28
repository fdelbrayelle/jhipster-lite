package tech.jhipster.lite.generator.server.springboot.broker.kafka.application;

import org.springframework.stereotype.Service;
import tech.jhipster.lite.generator.server.springboot.broker.kafka.domain.KafkaModuleFactory;
import tech.jhipster.lite.module.domain.JHipsterModule;
import tech.jhipster.lite.module.domain.docker.DockerImages;
import tech.jhipster.lite.module.domain.properties.JHipsterModuleProperties;

@Service
public class KafkaApplicationService {

  private final KafkaModuleFactory kafka;

  public KafkaApplicationService(DockerImages dockerImages) {
    this.kafka = new KafkaModuleFactory(dockerImages);
  }

  public JHipsterModule init(JHipsterModuleProperties properties) {
    return kafka.buildModuleInit(properties);
  }

  public JHipsterModule addSampleProducerConsumer(JHipsterModuleProperties properties) {
    return kafka.buildModuleSampleProducerConsumer(properties);
  }

  public JHipsterModule addAkhq(JHipsterModuleProperties properties) {
    return kafka.buildModuleAkhq(properties);
  }
}
