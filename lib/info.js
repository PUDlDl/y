exports.info = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2, grupch3) => {
	return `*INFO ${BotName}*
  
  Hi, *${id.split("@s.whatsapp.net")[0]}* 👋️

         ───
📆 *${tampilTanggal}*
⏱️ *${tampilWaktu}*
         ───
         
*About ${BotName}*
➻ *AUTHOR*: **Y**
➻ *DESIGNER*: **Y**
➻ *YOUTUBE*: ~

*Cita-cita ingin menjadi suami Anya Geraldine :)*

*SOSMED ADMIN*
➻ *Group WhatsApp* _${grupch1}_
➻ *YouTube* ~
➻ *Instagram* _${instagramlu}_
➻ *Creator ${BotName}* _${whatsapplu}_


*MADE BY *Y**`
}
