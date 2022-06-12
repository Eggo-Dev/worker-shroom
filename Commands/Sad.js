const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('sad')
		.setDescription('Oh no!'),
	async execute(interaction) {
		return interaction.reply('Cheer up! :slight_smile:');
	},
};