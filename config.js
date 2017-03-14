/**
 * Created by ostwald on 3/14/17.
 */

// the configs for osws and oswscl are identical
var HOST =  window.location.host.indexOf('osws') == -1 ? 'localhost' : 'osws';

// only osws is NOT a development server
var DEVEL = window.location.host.indexOf('osws.ucar.edu') == -1;