module.exports = createEvent;

function createEvent(state) {
  const event = {
    get id() {
      return state.id;
    },
    get isDue() {
      const now = Date.now();

      return state.date <= now;
    },
    date: state.date,
    link: state.link,
    place: state.place,
    title: state.title,
    coverUrl: state.coverUrl,
    description: state.description
  };

  return event;
}
