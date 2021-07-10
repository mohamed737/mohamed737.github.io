export function LogInAction(text) {
    return { type: 'LOG_USER_IN', payload: text }
  }
export function LogOutAction() {
    return { type: 'LOG_USER_OUT' }
  }

