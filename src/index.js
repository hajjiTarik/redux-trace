export default class reTrace {
  start = store => next => (action) => {
    if (!store) return;
    this.stateInfo(store);
    this.actionInfo(next, action);
  };
  stateInfo = (store) => {
    console.log('%cAPPLICATION CURRENT STATE', 'color: #528ef1');
    console.table(store.getState());
  }

  actionInfo = (next, action) => {
    const result = next(action);
    console.log(`%cTRIGGERED ACTION:${action.type}`, 'color: #fbbc05');
    console.table({ action: result });
  }
}
