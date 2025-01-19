const { cmd, commands } = require('../command'),
  { readEnv } = require('../lib/database')
cmd(
  {
    pattern: 'mysettings',
    alias: 'setting',
    desc: 'To download songs.',
    react: '\u2699️',
    category: 'download',
    filename: __filename,
  },
  async (
    _0x111e30,
    _0x1d5aa8,
    _0x3b60fe,
    { from: _0x24f933, isOwner: _0x48f8df, reply: _0x3e51d6, q: _0x186789 }
  ) => {
    try {
      if (!_0x48f8df) {
        return _0x3e51d6('*\u274C You are not the owner!*')
      }
      const _0x13795e = await readEnv()
      let _0x42651a =
             '\n\u250F\u2501\u252B*\u26ACISHAN-SETTING\u26AC*\u2523\u2501\u273E\n\u2503\u273B \n\u253B\n*🌈️MODE \u27AD* _' +
        _0x13795e.MODE +
        '_\n*🇰🇷CHAT REPLY \u27AD* _' +
        _0x13795e.AUTO_REPLY +
        '_\n*🇰🇷VOICE_REPLY \u27AD* _' +
        _0x13795e.AUTO_VOICE +
        '_\n*🇰🇷STICKER_REPLY \u27AD* _' +
        _0x13795e.AUTO_STICKER +
        '_\n*🇰🇷AUTO_READ_STATUS \u27AD* _' +
        _0x13795e.AUTO_READ_STATUS +
        '_\n*🇰🇷AUTO_REACT \u27AD* _' +
        _0x13795e.AUTO_REACT +
        '_\n*🇰🇷ANTI_BAD_WORDS \u27AD* _' +
        _0x13795e.ANTI_BAD +
        '_\n*🇰🇷ANTI_LINK \u27AD* _' +
        _0x13795e.ANTI_LINK +
        '_\n*🇰🇷READ_COMMAND \u27AD* _' +
        _0x13795e.READ_COMMAND +
        '_\n*🇰🇷ꜰᴀᴋᴇ_ʀᴇᴄᴏʀᴅɪɴɢ \u27AD* _' +
        _0x13795e.FAKE_RECORDING +
        '_\n\nᴜꜱᴇ *SACHIYA_MD\n\n>\u273B\n'
      return await _0x111e30.sendMessage(
        _0x24f933,
        {
          image: {
            url: 'https://i.imgur.com/xyJuRzb.jpeg',
          },
          caption: _0x42651a,
          contextInfo: {
            mentionedJid: ['94771470396@s.whatsapp.net'],
            groupMentions: [],
            forwardingScore: 1,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
              newsletterName: 'ISHAN-MD\u273B',
              serverMessageId: 999,
            },
            externalAdReply: {
              title: 'ISHAN MD',
              body: 'LSACHINTHA PASHAN',
              mediaType: 1,
              sourceUrl: 'https://github.com/LAKSIDUOFFICIAL',
              thumbnailUrl:
                'https://i.imgur.com/xyJuRzb.jpeg',
              renderLargerThumbnail: false,
              showAdAttribution: true,
            },
          },
        },
        { quoted: _0x1d5aa8 }
      )
    } catch (_0xef36d5) {
      console.log(_0xef36d5)
      _0x3e51d6('' + _0xef36d5)
    }
  }
)
cmd(
  {
    pattern: 'setting',
    alias: 'var',
    desc: 'To download songs.',
    react: '\u2699️',
    category: 'download',
    filename: __filename,
  },
  async (
    _0x38bce2,
    _0x1e3ac3,
    _0xf6ead3,
    { from: _0x3c633b, isOwner: _0x24f9a0, reply: _0x103389, q: _0x10e4eb }
  ) => {
    if (!_0x24f9a0) {
      return _0x103389('*\u274C You are not the owner!*')
    }
    try {
      let _0x12772e ='*☆━━━━ CHNGE YOU SETTING━━━━☆\n\༒͢🖤⃝WORK MODE🖤⃝ꪮꪗ ★࿐\n➽ 1.1 ║ Public WorK \n➽ 1.2 ║ Private WorK\n➽ 1.3 ║ Group  ONLY\n➽ 1.4 ║ Inbox  ONLY\n༒͢🖤⃝CHAT REPLY🖤⃝ꪮꪗ ★࿐\n➽  2.1 ║ Chat Reply ONn\➽  2.2 ║ Chat Reply OFF\n༒͢🖤⃝VOICE REPY🖤⃝ꪮꪗ ★࿐\n➽  3.1║ Voice Reply ON\n➽ 3.2 ║ Voice Reply OFF\n༒͢🖤⃝STICKER REPLY🖤⃝ꪮꪗ ★࿐\n➽ 4.1 ║ Sticker ON\n➽ 4.2 ║ Sticker  OFF\n༒͢🖤⃝AUTO REPLY🖤⃝ꪮꪗ ★࿐\n➽ 5.1 ║ Auto React ON \n➽  5.2║ Auto React OFF\n༒͢🖤⃝ANTI BAND WORDS🖤⃝ꪮꪗ ★࿐\n➽ 6.1 ║ Anti Bad Words ON \n ➽ 6.2 ║ Anti Bad Words OFF\n༒͢🖤⃝ANTI LINK🖤⃝ꪮꪗ ★࿐\n➽ 7.1 ║ Anti link ON\n➽ 7.2 ║ Anti link OFF\n༒͢🖤⃝AUTO READ COMMAND🖤⃝ꪮꪗ࿐\n➽ 8.1║ Auto Command ON\n➽ 8.2║ Auto Command OFF\n༒͢🖤⃝FACK RECOUDIND🖤⃝ꪮꪗ ★࿐\n➽ 9.1║ Fack Recoudind ON\n➽ 9.2║Fack Recoudind OFF\n༒͢🖤⃝AUTO READ STATUS🖤⃝ꪮꪗ ★࿐\n➽ 10.1 ║ Auto Status ON\n➽ 10.2 ║ Auto Status OFF'
      const _0x1bd5db = await _0x38bce2.sendMessage(
          _0x3c633b,
          {
            image: {
              url: 'https://i.imgur.com/xyJuRzb.jpeg',
            },
            caption: _0x12772e,
            contextInfo: {
              mentionedJid: ['94779062397@s.whatsapp.net'],
              groupMentions: [],
              forwardingScore: 1,
              isForwarded: true,
              forwardedNewsletterMessageInfo: {
                newsletterName: 'ISHAN-MD\u273B',
                serverMessageId: 999,
              },
              externalAdReply: {
                title: 'ISHAN MD',
                body: 'ISHAN CHAMIKA',
                mediaType: 1,
                sourceUrl: 'https://github.com/LAKSIDUOFFICIAL',
                thumbnailUrl:
                  'https://i.imgur.com/xyJuRzb.jpeg',
                renderLargerThumbnail: false,
                showAdAttribution: true,
              },
            },
          },
          { quoted: _0x1e3ac3 }
        ),
        _0x2aabcc = _0x1bd5db.key.id
      _0x38bce2.ev.on('messages.upsert', async (_0x5429d4) => {
        const _0x51a397 = _0x5429d4.messages[0]
        if (!_0x51a397.message) {
          return
        }
        const _0x1b3dbd =
            _0x51a397.message.conversation ||
            _0x51a397.message.extendedTextMessage?.text,
          _0x151346 = _0x51a397.key.remoteJid,
          _0x22e2c2 = _0x51a397.key.participant || _0x51a397.key.remoteJid,
          _0x3b26d4 =
            _0x51a397.message.extendedTextMessage &&
            _0x51a397.message.extendedTextMessage.contextInfo.stanzaId ===
              _0x2aabcc
        if (_0x3b26d4) {
          if (_0x1b3dbd === '1.1') {
            await _0x103389('.update 💞MODE💞:public')
          } else {
            if (_0x1b3dbd === '1.2') {
              await _0x103389('.update 💞MODE💞:private')
            } else {
              if (_0x1b3dbd === '1.3') {
                await _0x38bce2.sendMessage(
                  _0x151346,
                  { text: '.update 💞MODE💞:inbox' },
                  { quoted: _0x51a397 }
                )
              } else {
                if (_0x1b3dbd === '1.4') {
                  await _0x38bce2.sendMessage(
                    _0x151346,
                    { text: '.update 💞MODE💞:group' },
                    { quoted: _0x51a397 }
                  )
                } else {
                  if (_0x1b3dbd === '2.1') {
                    await _0x38bce2.sendMessage(
                      _0x151346,
                      { text: '.update 💞AUTO_REPLY💞:true' },
                      { quoted: _0x51a397 }
                    )
                  } else {
                    if (_0x1b3dbd === '2.2') {
                      await _0x38bce2.sendMessage(
                        _0x151346,
                        { text: '.update 💞AUTO_REPLY💞:false' },
                        { quoted: _0x51a397 }
                      )
                    } else {
                      if (_0x1b3dbd === '3.1') {
                        await _0x38bce2.sendMessage(
                          _0x151346,
                          { text: '.update 💞AUTO_VOICE💞:true' },
                          { quoted: _0x51a397 }
                        )
                      } else {
                        if (_0x1b3dbd === '3.2') {
                          await _0x38bce2.sendMessage(
                            _0x151346,
                            { text: '.update 💞AUTO_VOICE💞:false' },
                            { quoted: _0x51a397 }
                          )
                        } else {
                          if (_0x1b3dbd === '4.1') {
                            await _0x38bce2.sendMessage(
                              _0x151346,
                              { text: '.update 💞AUTO_STICKER💞:true' },
                              { quoted: _0x51a397 }
                            )
                          } else {
                            if (_0x1b3dbd === '4.2') {
                              await _0x38bce2.sendMessage(
                                _0x151346,
                                { text: '.update 💞AUTO_STICKER💞:false' },
                                { quoted: _0x51a397 }
                              )
                            } else {
                              if (_0x1b3dbd === '5.1') {
                                await _0x38bce2.sendMessage(
                                  _0x151346,
                                  { text: '.update 💞AUTO_REACT💞:true' },
                                  { quoted: _0x51a397 }
                                )
                              } else {
                                if (_0x1b3dbd === '5.2') {
                                  await _0x38bce2.sendMessage(
                                    _0x151346,
                                    { text: '.update 💞AUTO_REACT💞:false' },
                                    { quoted: _0x51a397 }
                                  )
                                } else {
                                  if (_0x1b3dbd === '6.1') {
                                    await _0x38bce2.sendMessage(
                                      _0x151346,
                                      { text: '.update 💞ANTI_BAD💞:true' },
                                      { quoted: _0x51a397 }
                                    )
                                  } else {
                                    if (_0x1b3dbd === '6.2') {
                                      await _0x38bce2.sendMessage(
                                        _0x151346,
                                        { text: '.update 💞ANTI_BAD💞:false' },
                                        { quoted: _0x51a397 }
                                      )
                                    } else {
                                      if (_0x1b3dbd === '7.1') {
                                        await _0x38bce2.sendMessage(
                                          _0x151346,
                                          { text: '.update 💞ANTI_LINK💞:true' },
                                          { quoted: _0x51a397 }
                                        )
                                      } else {
                                        if (_0x1b3dbd === '7.2') {
                                          await _0x38bce2.sendMessage(
                                            _0x151346,
                                            { text: '.update 💞ANTI_LINK💞:false' },
                                            { quoted: _0x51a397 }
                                          )
                                        } else {
                                          if (_0x1b3dbd === '8.1') {
                                            await _0x38bce2.sendMessage(
                                              _0x151346,
                                              {
                                                text: '.update 💞READ_MESSAGE💞:true',
                                              },
                                              { quoted: _0x51a397 }
                                            )
                                          } else {
                                            if (_0x1b3dbd === '8.2') {
                                              await _0x38bce2.sendMessage(
                                                _0x151346,
                                                {
                                                  text: '.update 💞READ_MESSAGE💞:false',
                                                },
                                                { quoted: _0x51a397 }
                                              )
                                            } else {
                                              if (_0x1b3dbd === '9.1') {
                                                await _0x38bce2.sendMessage(
                                                  _0x151346,
                                                  {
                                                    text: '.update 💞FAKE_RECORDING💞:true',
                                                  },
                                                  { quoted: _0x51a397 }
                                                )
                                              } else {
                                                if (_0x1b3dbd === '9.2') {
                                                  await _0x38bce2.sendMessage(
                                                    _0x151346,
                                                    {
                                                      text: '.update 💞FAKE_RECORDING💞:false',
                                                    },
                                                    { quoted: _0x51a397 }
                                                  )
                                                } else {
                                                  if (_0x1b3dbd === '10.1') {
                                                    await _0x38bce2.sendMessage(
                                                      _0x151346,
                                                      {
                                                        text: '.update 💞AUTO_READ_STATUS💞:true',
                                                      },
                                                      { quoted: _0x51a397 }
                                                    )
                                                  } else {
                                                    _0x1b3dbd === '10.2' &&
                                                      (await _0x38bce2.sendMessage(
                                                        _0x151346,
                                                        {
                                                          text: '.update 💞AUTO_READ_STATUS💞:false',
                                                        },
                                                        { quoted: _0x51a397 }
                                                      ))
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      })
    } catch (_0x3f10ce) {
      console.log(_0x3f10ce)
      _0x103389('' + _0x3f10ce)
    }
  }
)
