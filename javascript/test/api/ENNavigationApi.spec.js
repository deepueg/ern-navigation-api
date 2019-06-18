/**
 * Electrode Native generic navigation api (V2.0)
 * Navigation helper
 *
 * 
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * Do not edit the class manually.
 */
import {expect} from 'chai';
import EnNavigationRequests  from '../../src/api/EnNavigationRequests';
import EnNavigationEvents  from '../../src/api/EnNavigationEvents';

describe('EnNavigationApi', function(){
  let requests;
  let events;
  beforeEach(function() {
    requests = new EnNavigationRequests({
        registerHandler(){
        },
        sendRequest(){
        }
    });
    events = new EnNavigationEvents({
        registerEventListener(){
        },
        emitEvent(){
        }
    });

  });


    describe('back', function() {
      it('should send request back successfully', ()=> {
        //uncomment below and update the code to test back
        //return requests.back(route: any).then(response=> {
        //  if (error) throw error;
        //  expect(response).to.be();
        //});

      });
    });

    describe('finish', function() {
      it('should send request finish successfully', ()=> {
        //uncomment below and update the code to test finish
        //return requests.finish(opts: any).then(response=> {
        //  if (error) throw error;
        //  expect(response).to.be();
        //});

      });
    });

    describe('navigate', function() {
      it('should send request navigate successfully', ()=> {
        //uncomment below and update the code to test navigate
        //return requests.navigate(route: any).then(response=> {
        //  if (error) throw error;
        //  expect(response).to.be();
        //});

      });
    });

    describe('onNavButtonClick', function() {
        it('should emit event onNavButtonClick successfully', (done)=> {
        //uncomment below and update the code to test onNavButtonClick
        //register listener.
        //events.addOnNavButtonClickEventListener(()=>done());
        //emit event.
        //events.emitOnNavButtonClick(buttonId: string);
        //});
        done();
        });
    });

    describe('update', function() {
      it('should send request update successfully', ()=> {
        //uncomment below and update the code to test update
        //return requests.update(updatedRoute: any).then(response=> {
        //  if (error) throw error;
        //  expect(response).to.be();
        //});

      });
    });

});
