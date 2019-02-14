const FollowToggle = require("./follow_toggle");
const UsersSearch = require("./users_search");

$( () => {
  const $buttons = $("button.follow-toggle");
  $buttons.each( (index, $el) => {
    new FollowToggle($el)
  })

  const $usersSearch = $("nav.users-search");
  $usersSearch.each ( (index, el) => {
    new UsersSearch(el);
  })
});
