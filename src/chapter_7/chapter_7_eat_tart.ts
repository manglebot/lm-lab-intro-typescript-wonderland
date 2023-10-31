import { NumericLiteral } from 'typescript';
import { endAdventure, haveAdventures } from '../..';
import { askQuestion, clear, print } from '../ui/console';

export function eatTart(): void {
	clear(true);
	print('You take a bite of the tart...');

	const randomFlavour: number = Math.floor(Math.random()*10);

	if(randomFlavour === 3){
		print('Oh no, you chose the evil flavour. It taste horrible.');
		print('You feel very sick.... Game over');
		return endAdventure();
	} else {
		print('Oh my, that tastes amazing. BUT...');
		print('you\'re falling back into a dream where no one knows your name!');
		return askQuestion(
			'Press ENTER to re-enter Wonderland! ',
			haveAdventures
		);
	};
};