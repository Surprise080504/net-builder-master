import { Pipe, PipeTransform } from '@angular/core';
import { Friend } from '../../core/models/friend.model';

@Pipe({
  name: 'upgradedUsers'
})
export class UpgradedUsersPipe implements PipeTransform {

  transform(friends: Friend[], level: number): Friend[] {
    return friends.filter(function(friend) {
      return friend.user.star >= level;
    });
  }

}
