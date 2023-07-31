SugarCube.DebugBar.watch.add('$bodyType');
SugarCube.DebugBar.watch.add('$breastsStore');
SugarCube.DebugBar.watch.add('$dickStore');
SugarCube.DebugBar.watch.add('$fatStore');
SugarCube.DebugBar.watch.add('$heightStore');
SugarCube.DebugBar.watch.add('$milkStored');
SugarCube.DebugBar.watch.add('$muscleStore');

SugarCube.DebugBar.watch.add('$muscleGrowthMax');
SugarCube.DebugBar.watch.add('$muscleGrowthMaxDiet');
SugarCube.DebugBar.watch.add('$muscleGrowthMaxTemp');
SugarCube.DebugBar.watch.add('$muscleGrowthMaxTotal');
SugarCube.DebugBar.watch.add('$muscleGrowthMod');
SugarCube.DebugBar.watch.add('$muscleGrowthStyle');
SugarCube.DebugBar.watch.add('$workingOutBonus');

SugarCube.Config.debug = false;
SugarCube.State.setVar('$debug', false);
SugarCube.Config.debug = true;
SugarCube.State.setVar('$debug', true);

//run macro
new SugarCube.Wikifier(
  null,
  '<<addTrigger "postSleepDickDialog4" false false>>'
);

//rich mode
SugarCube.State.variables.consumables.forEach((consumables) => {
  consumables.amount = 99;
});
SugarCube.State.setVar('$consumables', SugarCube.State.variables.consumables);

SugarCube.State.variables.gymStoreSupplies.forEach((supplement) => {
  supplement.amount = 999;
});
SugarCube.State.setVar(
  '$gymStoreSupplies',
  SugarCube.State.variables.gymStoreSupplies
);

SugarCube.State.setVar('$money', 9999999);

//Tasha's
SugarCube.State.variables.consumables.forEach((consumables) => {
  consumables.forSale = 0;
});

for (let i = 0; i < 100; i++) {
  SugarCube.Engine.play('StoreRefresh');
}
SugarCube.Engine.play('SecondHandStore');

//go out
SugarCube.State.setVar('$carefreeCarefull', -3);
SugarCube.State.setVar('$submissiveDominant', 3);
SugarCube.State.setVar('$shyConfident', 3);
//go in
SugarCube.State.setVar('$carefreeCarefull', 3);
SugarCube.State.setVar('$submissiveDominant', -3);
SugarCube.State.setVar('$shyConfident', -3);
//go middle
SugarCube.State.setVar('$carefreeCarefull', 0);
SugarCube.State.setVar('$submissiveDominant', 0);
SugarCube.State.setVar('$shyConfident', 0);

//go hyper
SugarCube.State.setVar('$muscle', 1000);
SugarCube.State.setVar('$breasts', 1000);
SugarCube.State.setVar('$height', 1000);
SugarCube.State.setVar('$futa', true);
SugarCube.State.setVar('$dickActive', true);
SugarCube.State.setVar('$dick', 1000);
SugarCube.State.setVar('$dickErectionMod', 10);
SugarCube.State.setVar('$dickGirthMod', 10);
SugarCube.State.setVar('$fat', 50);

// eventPassage
SugarCube.State.setVar(
  '$currentEvent',
  SugarCube.setup.events.find((event) => event.name === 'asdf')
);
SugarCube.Engine.play('eventPassage');

SugarCube.State.variables.currentScene;

// Unlock potion brewing
SugarCube.State.variables.furniture.push("distilation still");
for (const consumable of SugarCube.State.variables.consumables) {
  consumable.amount = 10
}
for (let i = 0; i < 10; i++) {
  SugarCube.State.variables.potionIngredients.push('ConfidentIngredient');
  SugarCube.State.variables.potionIngredients.push('CarefreeIngredient');  
}
