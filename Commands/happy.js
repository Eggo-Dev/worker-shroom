const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('happy')
		.setDescription('Yay!'),
	async execute(interaction) {
		return interaction.reply('Yay!');
	},
};