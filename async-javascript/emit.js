Pubsub = {handlers: {}};

Pubsub.on = function(eventType, handler){
	if(!(eventType in this.handlers)){
		this.handlers[eventType] = [];
	}

	this.handlers[eventType].push(handler);
	return this;
};

Pubsub.emit = function(eventType){
	var handlerArgs = Array.prototype.slice.call(arguments, 1);
	for(var i=0;i<this.handlers[eventType].length; ++i){
		this.handlers[eventType][i].apply(this, handlerArgs);
	}

	return this;
};

Pubsub.on('yell', function(name, age){
	console.log(name+'('+age+'years old) yell....');
});

Pubsub.emit('yell', 'Jack', '28');