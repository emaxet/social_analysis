var data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"]
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"]
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"]
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"]
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"]
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"]
  },
};

function listSocialGraph(users) {
  for (var profile in users) {
    var username = users[profile].name;
    var following = [];
    var followers = [];
    var userKeys = Object.keys(users);
    for (var follow of users[profile].follows) {
      following.push(users[follow].name);
    }
    for (var i = 0; i < userKeys.length; i++) {
      if (users[userKeys[i]].follows.indexOf(profile, 0) > -1) {
        followers.push(users[userKeys[i]].name);
      }
    }
    console.log(username + " follows: " + following.join(" "));
    console.log(username + " is followed by: " + followers.join(" "));
  }
}

function mostFollows(users) {
  var userFollows = {};
  var mostFollows;
  for (var profile in users) {
    userFollows[users[profile].name] = users[profile].follows.length;
  }
  for (var username in userFollows) {
    if (!mostFollows) {
      mostFollows = username;
    }
    mostFollows = (userFollows[username] > userFollows[mostFollows]) ? username : mostFollows;
  }
  console.log(mostFollows);
}

function mostFollowers(users) {
  var userFollowers = {};
  var mostFollowers;
  var mostFollowedUsers = [];
  var userKeys = Object.keys(users);
  for (var profile in users) {
    var followers = [];
    userKeys.forEach((userKey) => {
      if(users[userKey].follows.indexOf(profile, 0) > -1) {
        followers.push(users[userKey].name);
      }
    });
    userFollowers[users[profile].name] = followers.length;
  }
  for (var username in userFollowers) {
    if (!mostFollowers) {
      mostFollowers = userFollowers[username];
    }
    mostFollowers = (userFollowers[username] > mostFollowers) ? userFollowers[username] : mostFollowers;
  }
  for (var username in userFollowers) {
    if (userFollowers[username] === mostFollowers ) {
      mostFollowedUsers.push(username);
    }
  }
  console.log("Most followed user(s): " + mostFollowedUsers.join(" "));
}

function mostFollowersOver30(users) {
  var userFollowers = {};
  var mostFollowers;
  var mostFollowedUsers = [];
  var userKeys = Object.keys(users);
  for (var profile in users) {
    var followers = [];
    userKeys.forEach((userKey) => {
      if(users[userKey].follows.indexOf(profile, 0) > -1) {
        followers.push(users[userKey].name);
      }
    });
    userFollowers[users[profile].name] = {followers: followers.length, age: users[profile].age};
  }
  for (var username in userFollowers) {
    if (!mostFollowers && userFollowers[username].age > 30) {
      mostFollowers = userFollowers[username].followers;
    } else if (!mostFollowers) {
      continue;
    } else {
      mostFollowers = (userFollowers[username].followers > mostFollowers && userFollowers[username].age > 30) ? userFollowers[username].followers : mostFollowers;
    }
  }
  for (var username in userFollowers) {
    if (userFollowers[username].followers === mostFollowers && userFollowers[username].age > 30) {
      mostFollowedUsers.push(username);
    }
  }
  console.log("Most followed user(s) over 30: " + mostFollowedUsers.join(" "));
}




