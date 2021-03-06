import type { Preset } from '../types';
import * as monorepos from './monorepo';

const staticGroups = {
  all: {
    description: 'Group all updates together',
    groupName: 'all dependencies',
    separateMajorMinor: false,
    groupSlug: 'all',
    packageRules: [
      {
        matchPackagePatterns: ['*'],
        groupName: 'all dependencies',
        groupSlug: 'all',
      },
    ],
    lockFileMaintenance: {
      enabled: false,
    },
  },
  allNonMajor: {
    description: 'Group all minor and patch updates together',
    packageRules: [
      {
        matchPackagePatterns: ['*'],
        matchUpdateTypes: ['minor', 'patch'],
        groupName: 'all non-major dependencies',
        groupSlug: 'all-minor-patch',
      },
    ],
  },
  recommended: {
    description:
      'Use curated list of recommended non-monorepo package groupings',
    extends: [
      'group:allApollographql',
      'group:fortawesome',
      'group:fusionjs',
      'group:glimmer',
      'group:goOpenapi',
      'group:hibernateCore',
      'group:hibernateValidator',
      'group:hibernateOgm',
      'group:hibernateCommons',
      'group:illuminate',
      'group:jekyllEcosystem',
      'group:polymer',
      'group:resilience4j',
      'group:rubyOmniauth',
      'group:socketio',
      'group:springAmqp',
      'group:springAndroid',
      'group:springBatch',
      'group:springBoot',
      'group:springCloud',
      'group:springCore',
      'group:springData',
      'group:springHateoas',
      'group:springIntegration',
      'group:springKafka',
      'group:springLdap',
      'group:springMobile',
      'group:springOsgi',
      'group:springRestDocs',
      'group:springRoo',
      'group:springScala',
      'group:springSecurity',
      'group:springSession',
      'group:springShell',
      'group:springSocial',
      'group:springStatemachine',
      'group:springWebflow',
      'group:springWs',
      'group:symfony',
    ],
    ignoreDeps: [],
  },
  allApollographql: {
    description: 'Group all packages published by Apollo GraphQL together',
    packageRules: [
      {
        extends: 'packages:apollographql',
        groupName: 'Apollo GraphQL packages',
      },
    ],
  },
  definitelyTyped: {
    description: 'Group all @types packages together',
    packageRules: [
      {
        groupName: 'definitelyTyped',
        matchPackagePatterns: ['^@types/'],
      },
    ],
  },
  dotNetCore: {
    description: '.NET Core Docker containers',
    packageRules: [
      {
        matchDatasources: ['docker'],
        matchPackagePatterns: ['^mcr.microsoft.com/dotnet/core/'],
        groupName: '.NET Core Docker containers',
      },
    ],
  },
  fortawesome: {
    description: 'Group all packages by Font Awesome together',
    packageRules: [
      {
        groupName: 'Font Awesome',
        matchPackagePatterns: ['^@fortawesome/'],
      },
    ],
  },
  fusionjs: {
    description: 'Fusion.js packages',
    matchPackageNames: [
      'fusion-cli',
      'fusion-core',
      'fusion-test-utils',
      'fusion-tokens',
    ],
    matchPackagePatterns: [
      '^fusion-plugin-*',
      '^fusion-react*',
      '^fusion-apollo*',
    ],
  },
  glimmer: {
    description: 'Group Glimmer.js packages together',
    packageRules: [
      {
        groupName: 'Glimmer.js packages',
        groupSlug: 'glimmer',
        matchPackageNames: ['@glimmer/component', '@glimmer/tracking'],
      },
    ],
  },
  illuminate: {
    description: 'Group PHP illuminate packages together',
    packageRules: [
      {
        matchPackagePatterns: ['^illuminate/'],
        groupName: 'illuminate packages',
        groupSlug: 'illuminate',
      },
    ],
  },
  symfony: {
    description: 'Group PHP symfony packages together',
    packageRules: [
      {
        matchPackagePatterns: ['^symfony/'],
        groupName: 'symfony packages',
        groupSlug: 'symfony',
      },
    ],
  },
  polymer: {
    description: 'Group all @polymer packages together',
    packageRules: [
      {
        groupName: 'polymer packages',
        matchPackagePatterns: ['^@polymer/'],
      },
    ],
  },
  hibernateCore: {
    description: 'Group Java Hibernate Core packages',
    packageRules: [
      {
        matchPackagePatterns: ['^org.hibernate:'],
        groupName: 'hibernate core',
      },
    ],
  },
  hibernateValidator: {
    description: 'Group Java Hibernate Validator packages',
    packageRules: [
      {
        matchPackagePatterns: ['^org.hibernate.validator:'],
        groupName: 'hibernate validator',
      },
    ],
  },
  hibernateOgm: {
    description: 'Group Java Hibernate OGM packages',
    packageRules: [
      {
        matchPackagePatterns: ['^org.hibernate.ogm:'],
        groupName: 'hibernate ogm',
      },
    ],
  },
  hibernateCommons: {
    description: 'Group Java Hibernate Commons packages',
    packageRules: [
      {
        matchPackagePatterns: ['^org.hibernate.common:'],
        groupName: 'hibernate commons',
      },
    ],
  },
  resilience4j: {
    description: 'Group Java Resilience4j packages',
    packageRules: [
      {
        matchPackagePatterns: ['^io.github.resilience4j:'],
        groupName: 'resilience4j',
      },
    ],
  },
  springAmqp: {
    description: 'Group Java Spring AMQP packages',
    packageRules: [
      {
        groupName: 'spring amqp',
        matchPackagePatterns: ['^org.springframework.amqp:'],
      },
    ],
  },
  springAndroid: {
    description: 'Group Java Spring Android packages',
    packageRules: [
      {
        groupName: 'spring android',
        matchPackagePatterns: ['^org.springframework.android:'],
      },
    ],
  },
  springBatch: {
    description: 'Group Java Spring Batch packages',
    packageRules: [
      {
        groupName: 'spring batch',
        matchPackagePatterns: ['^org.springframework.batch:'],
      },
    ],
  },
  springBoot: {
    description: 'Group Java Spring Boot packages',
    packageRules: [
      {
        groupName: 'spring boot',
        matchPackagePatterns: ['^org.springframework.boot:'],
      },
    ],
  },
  springCloud: {
    description: 'Group Java Spring Cloud packages',
    packageRules: [
      {
        groupName: 'spring cloud',
        matchPackagePatterns: ['^org.springframework.cloud:'],
      },
    ],
  },
  springCore: {
    description: 'Group Java Spring Core packages',
    packageRules: [
      {
        groupName: 'spring core',
        matchPackagePatterns: ['^org.springframework:'],
      },
    ],
  },
  springData: {
    description: 'Group Java Spring Data packages',
    packageRules: [
      {
        groupName: 'spring data',
        matchPackagePatterns: ['^org.springframework.data:'],
      },
    ],
  },
  springHateoas: {
    description: 'Group Java Spring HATEOAS packages',
    packageRules: [
      {
        groupName: 'spring hateoas',
        matchPackagePatterns: ['^org.springframework.hateoas:'],
      },
    ],
  },
  springIntegration: {
    description: 'Group Java Spring Integration packages',
    packageRules: [
      {
        groupName: 'spring integration',
        matchPackagePatterns: ['^org.springframework.integration:'],
      },
    ],
  },
  springKafka: {
    description: 'Group Java Spring Kafka packages',
    packageRules: [
      {
        groupName: 'spring kafka',
        matchPackagePatterns: ['^org.springframework.kafka:'],
      },
    ],
  },
  springLdap: {
    description: 'Group Java Spring LDAP packages',
    packageRules: [
      {
        groupName: 'spring ldap',
        matchPackagePatterns: ['^org.springframework.ldap:'],
      },
    ],
  },
  springMobile: {
    description: 'Group Java Spring Mobile packages',
    packageRules: [
      {
        groupName: 'spring mobile',
        matchPackagePatterns: ['^org.springframework.mobile:'],
      },
    ],
  },
  springOsgi: {
    description: 'Group Java Spring OSGi packages',
    packageRules: [
      {
        groupName: 'spring osgi',
        matchPackagePatterns: ['^org.springframework.osgi:'],
      },
    ],
  },
  springRestDocs: {
    description: 'Group Java Spring REST Docs packages',
    packageRules: [
      {
        groupName: 'spring restdocs',
        matchPackagePatterns: ['^org.springframework.restdocs:'],
      },
    ],
  },
  springRoo: {
    description: 'Group Java Spring Roo packages',
    packageRules: [
      {
        groupName: 'spring roo',
        matchPackagePatterns: ['^org.springframework.roo:'],
      },
    ],
  },
  springScala: {
    description: 'Group Java Spring Scala packages',
    packageRules: [
      {
        groupName: 'spring scala',
        matchPackagePatterns: ['^org.springframework.scala:'],
      },
    ],
  },
  springSecurity: {
    description: 'Group Java Spring Security packages',
    packageRules: [
      {
        groupName: 'spring security',
        matchPackagePatterns: ['^org.springframework.security:'],
      },
    ],
  },
  springSession: {
    description: 'Group Java Spring Session packages',
    packageRules: [
      {
        groupName: 'spring session',
        matchPackagePatterns: ['^org.springframework.session:'],
      },
    ],
  },
  springShell: {
    description: 'Group Java Spring Shell packages',
    packageRules: [
      {
        groupName: 'spring shell',
        matchPackagePatterns: ['^org.springframework.shell:'],
      },
    ],
  },
  springSocial: {
    description: 'Group Java Spring Social packages',
    packageRules: [
      {
        groupName: 'spring social',
        matchPackagePatterns: ['^org.springframework.social:'],
      },
    ],
  },
  springStatemachine: {
    description: 'Group Java Spring Statemachine packages',
    packageRules: [
      {
        groupName: 'spring statemachine',
        matchPackagePatterns: ['^org.springframework.statemachine:'],
      },
    ],
  },
  springWebflow: {
    description: 'Group Java Spring WebFlow packages',
    packageRules: [
      {
        groupName: 'spring webflow',
        matchPackagePatterns: ['^org.springframework.webflow:'],
      },
    ],
  },
  springWs: {
    description: 'Group Java Spring WS packages',
    packageRules: [
      {
        groupName: 'spring ws',
        matchPackagePatterns: ['^org.springframework.ws:'],
      },
    ],
  },
  socketio: {
    description: 'Group socket.io packages',
    packageRules: [
      {
        groupName: 'socket.io packages',
        matchPackagePatterns: ['^socket.io'],
      },
    ],
  },
  postcss: {
    description: 'Group postcss packages together',
    packageRules: [
      {
        extends: 'packages:postcss',
        groupName: 'postcss packages',
      },
    ],
  },
  jekyllEcosystem: {
    description: 'Group jekyll and related ruby packages together',
    packageRules: [
      {
        matchSourceUrlPrefixes: [
          'https://github.com/jekyll/',
          'https://github.com/github/pages-gem',
        ],
        groupName: 'jekyll ecosystem packages',
      },
    ],
  },
  rubyOmniauth: {
    description: 'Group omniauth packages together',
    packageRules: [
      {
        matchDatasources: ['rubygems'],
        matchPackagePatterns: ['^omniauth'],
        groupName: 'omniauth packages',
      },
    ],
  },
  goOpenapi: {
    description: 'Group go-openapi packages together',
    packageRules: [
      {
        matchDatasources: ['go'],
        groupName: 'go-openapi packages',
        groupSlug: 'go-openapi',
        matchPackagePatterns: ['^github.com/go-openapi/'],
      },
    ],
  },
  googleapis: {
    description: 'Group googleapis packages together',
    packageRules: [
      {
        extends: 'packages:googleapis',
        groupName: 'googleapis packages',
      },
    ],
  },
  linters: {
    description: 'Group various lint packages together',
    packageRules: [
      {
        extends: 'packages:linters',
        groupName: 'linters',
      },
    ],
  },
  jsUnitTest: {
    description: 'Group JS unit test packages together',
    packageRules: [
      {
        extends: 'packages:jsUnitTest',
        groupName: 'JS unit test packages',
      },
    ],
  },
  jsUnitTestNonMajor: {
    description: 'Group JS unit test packages together',
    packageRules: [
      {
        extends: 'packages:jsUnitTest',
        minor: {
          groupName: 'JS unit test packages',
        },
      },
    ],
  },
  unitTest: {
    description: 'Group all unit test packages together',
    packageRules: [
      {
        extends: 'packages:unitTest',
        groupName: 'unit test packages',
      },
    ],
  },
  unitTestNonMajor: {
    description: 'Group all unit test packages together',
    packageRules: [
      {
        extends: 'packages:unitTest',
        minor: {
          groupName: 'unit test packages',
        },
      },
    ],
  },
  jsTest: {
    description: 'Group JS test packages together',
    packageRules: [
      {
        extends: 'packages:jsTest',
        groupName: 'JS test packages',
      },
    ],
  },
  jsTestMonMajor: {
    description: 'Group non-major JS test package updates together',
    packageRules: [
      {
        extends: 'packages:jsTest',
        minor: {
          groupName: 'JS test packages',
        },
      },
    ],
  },
  test: {
    description: 'Group all test packages together',
    packageRules: [
      {
        extends: 'packages:test',
        groupName: 'test packages',
      },
    ],
  },
  testNonMajor: {
    description: 'Group all non-major test package updates together',
    packageRules: [
      {
        extends: 'packages:test',
        minor: {
          groupName: 'test packages',
        },
      },
    ],
  },
};

const config: any = { ...staticGroups };

const monorepoNames = [];
for (const monorepo of Object.keys(monorepos.presets)) {
  const name = `${monorepo}Monorepo`;
  monorepoNames.push(`group:${name}`);
  config[name] = {
    packageRules: [
      {
        description: `Group packages from ${monorepo} monorepo together`,
        extends: `monorepo:${monorepo}`,
        groupName: `${monorepo} monorepo`,
      },
    ],
  };
}
config.monorepos = {
  description: 'Group known monorepo packages together',
  ignoreDeps: [],
  extends: monorepoNames,
};

export const presets: Record<string, Preset> = config;
