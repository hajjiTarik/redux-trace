stateInfo = (store) => {
  console.log('%cAPPLICATION CURRENT STATE', 'color: #528ef1');
  console.table(store.getState());
}

actionInfo = (next, action) => {
  const result = next(action);
  console.log(`%cTRIGGERED ACTION:${action.type}`, 'color: #fbbc05');
  console.table({ action: result });
}
export const agent = store => next => (action) => {
    if (!store) return;
    stateInfo(store);
    actionInfo(next, action);
};
