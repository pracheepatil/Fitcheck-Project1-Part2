// Firebase Authentication Service (Project 2 Ready)
// This is a skeleton - will be fully implemented in Project 2

const mockAuthService = {
  currentUser: null,

  async login(email, password) {
    // Mock login - will use Firebase in Project 2
    const token = 'mock-token-' + Date.now();
    localStorage.setItem('authToken', token);
    this.currentUser = { email, name: email.split('@')[0] };
    return { success: true, user: this.currentUser };
  },

  async signup(email, password, name) {
    // Mock signup - will use Firebase in Project 2
    const token = 'mock-token-' + Date.now();
    localStorage.setItem('authToken', token);
    this.currentUser = { email, name };
    return { success: true, user: this.currentUser };
  },

  async logout() {
    localStorage.removeItem('authToken');
    this.currentUser = null;
    return { success: true };
  },

  async resetPassword(email) {
    // Mock reset - will use Firebase in Project 2
    return { success: true, message: 'Password reset email sent' };
  },

  isAuthenticated() {
    return !!localStorage.getItem('authToken');
  },

  getCurrentUser() {
    return this.currentUser || (localStorage.getItem('authToken') ? { email: 'user@example.com' } : null);
  }
};

export default mockAuthService;
