const actions = {
  LOAD_ASYNC: 'sample/LOAD_ASYNC',
  LOAD: 'sample/LOAD',
}

export const getAsyncSample = () => {
  return {
    type: actions.LOAD_ASYNC,
  }
}

export const setAsyncSample = albums => {
  return {
    type: actions.LOAD,
    payload: albums,
  }
}

export default actions
