module.exports = {
  extrato : getExtrato(),
  objectives : getObjectives(),
  settings : getSettings(),
};

function getExtrato(){
  return [
    { id : 1, category : 'Lazer', name : 'Saraiva', vl_credito : 43.50, vl_troco : 4.35, vl_final : 47.85 },
    { id : 2, category : 'Alimentação', name : 'Outback', vl_credito : 120.00, vl_troco : 12.00, vl_final : 132.00 },
    { id : 3, category : 'Alimentação', name : 'Starbucks', vl_credito : 12.90, vl_troco : 1.29, vl_final : 14.19 },
    { id : 4, category : 'Vestuário', name : 'Le Lis Blanc', vl_credito : 79.90, vl_troco : 7.99, vl_final : 87.89 },
    { id : 5, category : 'Vestuário', name : 'Santa Lolla', vl_credito : 156.70, vl_troco : 15.67, vl_final : 172.37 },
    { id : 6, category : 'Alimentação', name : 'The Fifties', vl_credito : 65.10, vl_troco : 6.51, vl_final : 71.61 },
    { id : 7, category : 'Transporte', name : 'Uber', vl_credito : 20.17, vl_troco : 2.01, vl_final : 22.18 },
    { id : 8, category : 'Transporte', name : 'Uber', vl_credito : 23.15, vl_troco : 2.31, vl_final : 25.46 },
  ];
}

function getObjectives(){
  return [
    { id: 1, name : 'Intercâmbio', target_vl : 5000.0, current_vl : 1000.0, target_date : 201712 }, 
    { id: 2, name : 'Tattoo', target_vl : 800.0, current_vl : 50.0, target_date : 201612 },
    { id: 3, name : 'Notebook', target_vl : 2000.0, current_vl : 250.0, target_date : 201706 },
    { id: 4, name : 'Viagem', target_vl : 1500.0, current_vl : 400.0, target_date : 201801 },
  ];
}

function getSettings(){
  return {
    defaultObjectiveId : 0,
    minChangeValue : 1.00,
    usePercentage : true,
    changePercentage : 10,
  };
}