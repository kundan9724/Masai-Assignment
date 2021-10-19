const htmlBody = [
    {
        tagType: "div",
        properties:{ 
            id: "1",
            children: [],
            textContent: "div"
        }
    },
    {
        tagType: "ul",
        properties:{ 
            id: "2",
            children: [
                {
                    tagType: "li",
                    properties:{ 
                        children: [],
                        textContent: "li 1"
                    }
                },
                {
                    tagType: "li",
                    properties:{ 
                        children: [],
                        textContent: "li 2"
                    }
                },
            ],
            textContent: "unordered list"
        }
    },
    {
        tagType: "div",
        properties:{ 
            className: "p-2",
            id: "3",
            children: [
                {
                    tagType: "div",
                    properties:{ 
                        className: "p-2",
                        id: "4",
                        children: [
                            {
                                tagType: "div",
                                properties:{ 
                                    className: "p-2",
                                    id: "5",
                                    children: [],
                                    textContent: "div3"
                                }
                            },
                        ],
                        textContent: "div3"
                    }
                },
            ],
            textContent: "div3"
        }
    },

]

function render(tree, target)
{
    const fragment = new DocumentFragment();
    for (let node of tree)
    {
        const el = createElement(node)
        
            node?.properties?.children?.forEach(child => {
                render([child],el)
            })
        fragment.appendChild(el);
    }
    // console.log(document.getElementById("root").innerHTML);
    target.append(fragment);
    console.log(target);
}

function createElement(node)
{
    const elem = document.createElement(node.tagType);
    for (const property in node.properties)
    {
        elem[property]=node.properties[property]
    }
    return elem;
}
let root = document.getElementById("root");
render(htmlBody, root);