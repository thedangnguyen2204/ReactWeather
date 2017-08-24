function getTempCallBack(location, callback) {
  callback(undefined, 78);
  callback('City not found');
}

getTempCallBack('HaNoi', function (err, tmp) {
  if (err) {
    console.log('error', err);
  } else {
    console.log('success', err); 
  }
});

function getTempPromise(location) {
  return new Promise(function (resolve, reject) {
    resolve(79);
    reject('City not found');
  });
}

getTempPromise('Hanoi').then(function (tmp) {
  console.log('Promise success', tmp);
}, function (err) {
  console.log('Promise err', err);
})
