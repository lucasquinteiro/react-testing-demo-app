const { build, oneOf, sequence } = require('@jackfranklin/test-data-bot');

const userBuilder = build('User', {
  fields: {
    id: sequence(),
    name: oneOf('Lucas', 'Bob', 'Joe', 'Alice', 'Ben', 'John', 'Rick', 'Lewis', 'Mike'),
    location: 'USA',
    email: sequence((x: number) => `test+${x}@gmail.com`),
    profileImage: oneOf('/profile-images/messi.jpeg', '/profile-images/neymar.jpeg', '/profile-images/kun.jpeg', '/profile-images/mbappe.jpeg')
  }
})

const data = [userBuilder(), userBuilder(), userBuilder(), userBuilder(), userBuilder(), userBuilder(), userBuilder(), userBuilder(), userBuilder()]

const users = {
  data
};

export { users };
