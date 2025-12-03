# Mongoose gère les hooks de deux façons :

Soit en utilisant un callback next (style middleware Express)

Soit en utilisant une fonction async qui renvoie une promesse, sans next

# 1 avec next
userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next();
    
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
})


# 2 sans next
userSchema.pre('save', async function () {

  if (!this.isModified('password')) return;
  
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});
