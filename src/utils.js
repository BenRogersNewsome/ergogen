import * as m from 'makerjs'

export const deepcopy = value => {
    if (value === undefined) return undefined
    return JSON.parse(JSON.stringify(value))
}

export const deep = (obj, key, val) => {
    const levels = key.split('.')
    const last = levels.pop()
    let step = obj
    for (const level of levels) {
        step[level] = step[level] || {}
        step = step[level]
    }
    if (val === undefined) return step[last]
    step[last] = val
    return obj
}

export const eq = (a=[], b=[]) => {
    return a[0] === b[0] && a[1] === b[1]
}

export const line = (a, b) => {
    return new m.paths.Line(a, b)
}

export const circle = (p, r) => {
    return {paths: {circle: new m.paths.Circle(p, r)}}
}

export const rect = (w, h, o=[0, 0]) => {
    const res = {
        top:    line([0, h], [w, h]),
        right:  line([w, h], [w, 0]),
        bottom: line([w, 0], [0, 0]),
        left:   line([0, 0], [0, h])
    }
    return m.model.move({paths: res}, o)
}

export const poly = (arr) => {
    let counter = 0
    let prev = arr[arr.length - 1]
    const res = {
        paths: {}
    }
    for (const p of arr) {
        if (eq(prev, p)) continue
        res.paths['p' + (++counter)] = line(prev, p)
        prev = p
    }
    return res
}

const farPoint = [1234.1234, 2143.56789]

export const union = (a, b) => {
    return m.model.combine(a, b, false, true, false, true, {
        farPoint
    })
}

export const subtract = (a, b) => {
    return m.model.combine(a, b, false, true, true, false, {
        farPoint
    })
}

export const intersect = (a, b) => {
    return m.model.combine(a, b, true, false, true, false, {
        farPoint
    })
}

export const stack = (a, b) => {
    return {
        models: {
            a, b
        }
    }
}