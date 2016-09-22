// Learn more on how to config.
// - https://github.com/dora-js/dora-plugin-proxy#规则定义

module.exports = {
  '/api/tabs': function(req, res) {
    setTimeout(function() {
      res.json({
        success: true,
        data: [
          {
            id: 1,
            text: 'first',
            isComplete: true,
          },
          {
            id: 2,
            text: 'second',
          },
          {
            id: 3,
            text: 'third',
          },
        ],
      });
    }, 500);
  },
};
