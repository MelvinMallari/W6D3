class FollowToggle {
  constructor(el) {
    this.$el = $(el)
    this.userId = this.$el.data("userId");
    this.followState = this.$el.data("initialFollowState")
    this.render();
    this.handleClick();
  }

  render() {
    if (!this.followState) {
      this.$el.html("Follow!")
    } else {
      this.$el.html("Unfollow!")
    }
  }

  handleClick() {
    this.$el.on('click', event => {
      event.preventDefault();
      let method;
      if (this.followState) {
        method = 'DELETE';
      } else {
        method = 'POST';
      }

      $.ajax({
        url: `/users/${this.userId}/follow`,
        method: `${method}`,
        dataType: 'JSON'
      }).then( () => {
        // this.followState = "pending";
        // if (this.followState === "")
        this.$el.prop("disabled", true);
        setTimeout( () => {}, 2000)
      })
      .then(() => {
        this.$el.prop("disabled", false)
        this.followState = this.followState ? false : true;
        this.render()
      });

    });
  }


}

module.exports = FollowToggle