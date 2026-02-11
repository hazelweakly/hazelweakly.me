const emailHello = {
  title: "Email",
  url: "hazel at hazelweakly.me",
};
const emailMedia = {
  title: "Email for Media or Speaking inquiries",
  url: "media at hazelweakly.me",
};
const matrix = {
  title: "Matrix",
  url: "hazelweakly on matrix.org",
};
const signal = {
  title: "Signal",
  url: "hazelweakly dot zero one",
};
const github = {
  title: "GitHub",
  url: "https://github.com/hazelweakly",
};
const mastodon = {
  title: "Mastodon",
  url: "https://hachyderm.io/@hazelweakly",
};
const linkedIn = {
  title: "LinkedIn",
  url: "https://www.linkedin.com/in/hazelweakly",
};
const discord = {
  title: "Discord",
  url: "https://discordapp.com/users/690271969962098728",
};
const bluesky = {
  title: "Bluesky",
  url: "https://bsky.app/profile/hazelweakly.me",
};

export default {
  github,
  mastodon,
  linkedIn,
  discord,
  emailMedia,
  matrix,
  signal,
  all_socials: [github, mastodon, bluesky, linkedIn, discord],
  socials: [github, mastodon, linkedIn],
  messaging: [signal, matrix, emailHello],
};
