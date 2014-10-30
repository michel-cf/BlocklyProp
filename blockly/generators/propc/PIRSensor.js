//Code for the Parallax PIRSensor

'use strict';

if ( !Blockly.Language )
  Blockly.Language = {};
 
//PIR sensor blocks 
Blockly.Language.PIR_Sensor = {
  category: 'Sensors',
  helpUrl: '',
  init: function() {
    this.appendDummyInput( "" )
    .appendTitle( "PIR Sensor" )
    .appendTitle( "Pin" )
    .appendDropdownField( Blockly.DropdownField( profile.default.digital ), "PIN" );
  this.setNextStatement( false, null );
  this.setPreviousStatement( false, null ); 
  }
};

//Get generators
Blockly.propc = Blockly.Generators.propc( "" );

Blockly.Language.PIR_Sensor = {
  return '';
}
