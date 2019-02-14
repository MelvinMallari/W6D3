const APIUtil = {
  followUser: id => {
    $.ajax({
      url: `/users/${this.userId}/follow`,
      method: `${method}`,
      dataType: 'JSON'
    }).then(() => {
      this.followState = this.followState ? false : true;
      this.render()
    });
  },

  unfollowUser: id => {
    // ...
  }
}

module.exports = APIUtil;
