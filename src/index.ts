import Gremlin from 'gremlin';

import config from './config';

/**
 * @description Plumbing and setup
 */
const authenticator = new Gremlin.driver.auth.PlainTextSaslAuthenticator(
  `/dbs/${config.database}/colls/${config.collection}`,
  config.primaryKey
);

const client = new Gremlin.driver.Client(config.endpoint, {
  authenticator,
  traversalsource: 'g',
  rejectUnauthorized: true,
  mimeType: 'application/vnd.gremlin-v2.0+json'
});

/**
 * @description Add vertex
 */
export async function addVertex(): Promise<any> {
  const query = `g.addV(label).property('pk', partitionKey).property('name', name)`;

  await client.submit(query, {
    label: 'person',
    name: 'Some Person',
    partitionKey: 'pk'
  });

  return {
    body: `Done!`
  };
}

/**
 * @description Add edge
 */
export async function addEdge(): Promise<any> {
  const query = `g.V(source).addE(label).property('name', name).property('pk', partitionKey)`;

  await client.submit(query, {
    source: 'Some Person',
    label: 'person',
    name: 'Some OtherPerson',
    partitionKey: 'pk'
  });

  return {
    body: `Done!`
  };
}

/**
 * @description Read vertex
 */
export async function read(): Promise<any> {
  const query = `g.addV(label).property('name', name).property('pk', partitionKey)`;

  await client.submit(query, {
    label: 'person',
    name: 'Some Person',
    partitionKey: 'pk'
  });

  return {
    body: `Done!`
  };
}

/**
 * @description Update vertex
 */
export async function update(): Promise<any> {
  const query = `g.addV(label).property('name', name).property('pk', partitionKey)`;

  await client.submit(query, {
    label: 'person',
    name: 'Some Person',
    partitionKey: 'pk'
  });

  return {
    body: `Done!`
  };
}

/**
 * @description Drop vertex
 */
export async function drop(): Promise<any> {
  const query = `g.V().drop()`;

  await client.submit(query, {
    label: 'person',
    name: 'Some Person',
    partitionKey: 'pk'
  });

  return {
    body: `Done!`
  };
}
