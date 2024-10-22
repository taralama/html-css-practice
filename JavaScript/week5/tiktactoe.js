
var count = 2
const cells = {
    cell1: '',
    cell2: '',
    cell3: '',
    cell4: '',
    cell5: '',
    cell6: '',
    cell7: '',
    cell8: '',
    cell9: '',
}

const checkWin = (player) => {
    const winPatterns = [
      ['cell1', 'cell2', 'cell3'],
      ['cell4', 'cell5', 'cell6'],
      ['cell7', 'cell8', 'cell9'],
      ['cell1', 'cell4', 'cell7'],
      ['cell2', 'cell5', 'cell8'],
      ['cell3', 'cell6', 'cell9'],
      ['cell1', 'cell5', 'cell9'],
      ['cell3', 'cell5', 'cell7']
    ];

    for (let pattern of winPatterns) {
      if (pattern.every(cell => cells[cell] === player)) {
        
      }
    }
    
  };

checkWin('X')