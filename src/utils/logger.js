function logger(component) {
  console.log(`${component.name} rerendered`);

  return component;
}

export default logger;
