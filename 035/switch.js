let expr = 'monday';
switch (expr) {
    case 'monday':
    case 'tuesday':
    case 'wednesday':
    case 'thursday':
    case 'friday':
      console.log('Monday to friday');
        break;
    case 'saturday':
    case 'sunday':
      console.log('Holiday');
      break;
    default:
      console.log(`Sorry, there is no ${expr} in a week`);
}

expr = 'memesday';
switch (expr) {
    case 'monday':
    case 'tuesday':
    case 'wednesday':
    case 'thursday':
    case 'friday':
      console.log('Monday to friday');
        break;
    case 'saturday':
    case 'sunday':
      console.log('Holiday');
      break;
    default:
      console.log(`Sorry, there is no ${expr} in a week`);
}