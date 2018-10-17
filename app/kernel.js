module.exports.fields = (fillable, guarded = []) => {
    return fillable.filter(field => {
        return !guarded.includes(field);
    }).join(', ')
}