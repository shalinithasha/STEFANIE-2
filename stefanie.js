const chalk = require('chalk');
const { WAConnection, MessageType } = require('@adiwajshing/baileys');
const fs = require('fs');

async function WhatsAlexa() {
 const conn = new WAConnection();
	conn.logger.level = 'warn';
	conn.version = [2, 2119, 6]

  	conn.on('connecting', async () => {
		console.log(`${chalk.green.bold('Whats')}${chalk.blue.bold('Alexa')}
${chalk.white.italic('StefanieString Code Receiver')}
${chalk.blue.italic('ℹ️  Connecting to Whatsapp... Please wait.')}
${chalk.white('⚙ ඔබට Qr කේතය ලබාගැනීමට අපහසුනම් , ඔබෙ යතුරුපුවරුවේ CTRl+ ඔබේ මුසිකයේ scroll Down wheel එක කරකවා එය zoom out කරගත හැක.\n⚙If you have difficulty getting the Qr code, you can zoom it out by pressing the CTRl + scroll down wheel on your keyboard.')}`);
	});

	conn.on('open', async () => {
		console.log(
			chalk.green.bold('Stefanie QR Code: '),
			'STEFANIE;;;' +
				Buffer.from(JSON.stringify(conn.base64EncodedAuthInfo())).toString(
					'base64'
				)
		);
		await conn.sendMessage(
			conn.user.jid,
			'STEFANIE;;;' +
				Buffer.from(JSON.stringify(conn.base64EncodedAuthInfo())).toString(
					'base64'
				),
			MessageType.text
		);
		if (conn.user.jid.startsWith('90')) {
			await conn.sendMessage(
				conn.user.jid,
				'*⚠️ කරුණාකර මෙම කේතය කිසිවෙකු සමඟ බෙදා නොගන්න ' + conn.user.name + '* ⚠️',
				MessageType.text
			);
		} else {
			await conn.sendMessage(
				conn.user.jid,
				'*⚠️ Please Do Not Share This Code With Anyone ' +
					conn.user.name +
					'* ⚠️',
				MessageType.text
			);
		}
		console.log(
			chalk.green.bold(
				"ඔබට පණිවිඩය පිටපත් කිරීමට නොහැකි නම් කරුණාකර whatsapp පරීක්‍ෂා කරන්න. ඔබේ අංකයට QR කේතය යවන ලදි\n"
			),
			chalk.green.bold(
				'IF YOU CANNOT COPY THE MESSAGE, PLEASE CHECK WHATSAPP. QR CODE SENT TO YOUR OWN NUMBER!'
			)
		);
		process.exit(0);
	});

	await conn.connect();
}

WhatsAlexa();
