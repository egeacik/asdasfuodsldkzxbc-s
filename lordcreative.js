const express = require("express");
const { Client, RichEmbed } = require("discord.js");
const app = express();
const chalk = require("chalk");
const fs = require("fs");
const ytdl = require("ytdl-core");
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if (new Date().getTime() - start > milliseconds) {
      break;
    }
  }
}
const http = require("http");
app.get("", (request, response) => {
  console.log(Date.now() + " Ping tamamdır.");
  response.sendStatus(200);
});


const Discord = require("discord.js");
const client = new Discord.Client();
const data = new Map();



const lordcreative1 = new Discord.Client();
const lordcreative2 = new Discord.Client();
const lordcreative3 = new Discord.Client();
const lordcreative4 = new Discord.Client();
const lordcreative5 = new Discord.Client();
const lordcreative6 = new Discord.Client();
const lordcreative7 = new Discord.Client();
const lordcreative8 = new Discord.Client();
const lordcreative9 = new Discord.Client();
const lordcreative10 = new Discord.Client();
const lordcreative11 = new Discord.Client();
const lordcreative12 = new Discord.Client();
const lordcreative13 = new Discord.Client();
const lordcreative14 = new Discord.Client();
const lordcreative15 = new Discord.Client();
const lordcreative16 = new Discord.Client();
const lordcreative17 = new Discord.Client();
const lordcreative18 = new Discord.Client();
const lordcreative19 = new Discord.Client();
const lordcreative20 = new Discord.Client();
const lordcreative21 = new Discord.Client();
const lordcreative22 = new Discord.Client();
const lordcreative23 = new Discord.Client();
const lordcreative24 = new Discord.Client();

lordcreative1.login("");
lordcreative2.login("");
lordcreative3.login("");
lordcreative4.login("");
lordcreative5.login("");
lordcreative6.login("");
lordcreative7.login("");
lordcreative8.login("");
lordcreative9.login("");
lordcreative10.login("");
lordcreative11.login("");
lordcreative12.login("");
lordcreative13.login("");
lordcreative14.login("");
lordcreative15.login("");
lordcreative16.login("");
lordcreative17.login("");
lordcreative18.login("");
lordcreative19.login("");
lordcreative20.login("");
lordcreative21.login("");
lordcreative22.login("");
lordcreative23.login("");
lordcreative24.login("");



client.on("lordcreative", async function() {
const voiceChannel = "KANAL İD"
client.channels.cache.get(voiceChannel).join()
.catch(err => {
throw err;
})
})



lordcreative1.on("message", async msg => {
  if (msg.content.toLowerCase() === "!lordcreative") {
    const streamOptions = { seek: 5, volume: 5 };
    var kanal = msg.member.voiceChannel;
    kanal.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=wbi90wJRXaE&t=4s", {
        filter: "audioonly"
      })
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});



lordcreative2.on("message", async msg => {
  if (msg.content.toLowerCase() === "!lordcreative") {
    const streamOptions = { seek: 5, volume: 5 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=wbi90wJRXaE&t=4s", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

lordcreative3.on("message", async msg => {
    if (msg.content.toLowerCase() === "!lordcreative") {
    const streamOptions = { seek: 5, volume: 2};
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=wbi90wJRXaE&t=4s", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

lordcreative4.on("message", async msg => {
  if (msg.content.toLowerCase() === "!lordcreative") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=wbi90wJRXaE&t=4s", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

lordcreative5.on("message", async msg => {
  if (msg.content.toLowerCase() === "!lordcreative") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=wbi90wJRXaE&t=4s", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

lordcreative6.on("message", async msg => {
  if (msg.content.toLowerCase() === "!lordcreative") {
    const streamOptions = { seek: 5, volume: 1500 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=wbi90wJRXaE&t=4s", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

lordcreative7.on("message", async msg => {
  if (msg.content.toLowerCase() === "!lordcreative") {
    const streamOptions = { seek: 5, volume: 10 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=wbi90wJRXaE&t=4s",   {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

lordcreative8.on("message", async msg => {
  if (msg.content.toLowerCase() === "!lordcreative") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=wbi90wJRXaE&t=4s", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

lordcreative9.on("message", async msg => {
  if (msg.content.toLowerCase() === "!lordcreative") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=wbi90wJRXaE&t=4s", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

lordcreative10.on("message", async msg => {
  if (msg.content.toLowerCase() === "!lordcreative") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=wbi90wJRXaE&t=4s", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

lordcreative11.on("message", async msg => {
  if (msg.content.toLowerCase() === "!lordcreative") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=wbi90wJRXaE&t=4s", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

lordcreative12.on("message", async msg => {
  if (msg.content.toLowerCase() === "!lordcreative") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=wbi90wJRXaE&t=4s", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

lordcreative13.on("message", async msg => {
  if (msg.content.toLowerCase() === "!lordcreative") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=wbi90wJRXaE&t=4s", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

lordcreative14.on("message", async msg => {
  if (msg.content.toLowerCase() === "!lordcreative") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=wbi90wJRXaE&t=4s", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

lordcreative15.on("message", async msg => {
  if (msg.content.toLowerCase() === "!lordcreative") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=wbi90wJRXaE&t=4s", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

lordcreative16.on("message", async msg => {
  if (msg.content.toLowerCase() === "!lordcreative") {
    const streamOptions = { seek: 5, volume: 1500 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=wbi90wJRXaE&t=4s", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

lordcreative17.on("message", async msg => {
  if (msg.content.toLowerCase() === "!lordcreative") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=wbi90wJRXaE&t=4s", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

lordcreative18.on("message", async msg => {
  if (msg.content.toLowerCase() === "!lordcreative") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=wbi90wJRXaE&t=4s", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

lordcreative19.on("message", async msg => {
  if (msg.content.toLowerCase() === "!lordcreative") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=wbi90wJRXaE&t=4s", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

lordcreative20.on("message", async msg => {
  if (msg.content.toLowerCase() === "!lordcreative") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=wbi90wJRXaE&t=4s", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

lordcreative21.on("message", async msg => {
  if (msg.content.toLowerCase() === "!lordcreative") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=wbi90wJRXaE&t=4s", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

lordcreative22.on("message", async msg => {
  if (msg.content.toLowerCase() === "!lordcreative") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=wbi90wJRXaE&t=4s", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

lordcreative23.on("message", async msg => {
  if (msg.content.toLowerCase() === "!lordcreative") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=wbi90wJRXaE&t=4s", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

lordcreative24.on("message", async msg => {
  if (msg.content.toLowerCase() === "!lordcreative") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=wbi90wJRXaE&t=4s", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

