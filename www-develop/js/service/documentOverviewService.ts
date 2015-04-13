module Service {
    export class DocumentOverviewService {
        constructor(private $q) {

        }

        documents() {
            return this.$q(function (resolve, reject) {
                setTimeout(function () {
                    resolve([
                        {
                            "_id": "551bd8d98fe8ee54fe79fbe0",
                            "date": "2012-04-23T18:25:43.511Z",
                            "name": "test.pdf",
                            "uploader": "Karl Heinz",
                            "description": "test document",
                            "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABV0RVh0Q3JlYXRpb24gVGltZQA5LzExLzA24EiMeQAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNXG14zYAAATOSURBVFiF5ZddbJNVGMd/b/u+sG5dW8d0H+4L2UcGKUOjUBkD0QsVCSHGCSZEyIzGi92RyI3gBQYuIF440USYCULMdMEAGhMCKJZsZJAY2AfsI0Sy4bplG9LOvu3bt32PF9C69Wudwyv/ydNzznM+/v/znHOevIX/O6QMx1k8Ho8qhEAIARArASRJQpKkWXXDMNB1/afy8vKtgJ5SwOmldSJV50Lw9KWz+P1+rFarr6WlpfLQoUMTycbJQWGQXVg4y7nkmToApn67EWsHPGOonvGMyNWxMQzDwOv1Ultba2tubr4NLEsmQjpetkIskkyznNvvdANw/9YAP29r4vXuDgB+P3WWrt0fxvoB2ipWJggICYOGSz8wPj6Oy+UCYGRkZLqsrGwJccdh0oRBGDHLAE5WOJm+O0pl0w4Azm9v4gnXs5S/sSXWf7LCmTA3jEATRuxORFFaWpo7NDR0FZBnCQgaBroQswxg8ZPF5JQUE/T5ALh75SpD7aexlBQDsONODzvu9CTM1YUgaBgPwhsnorKyclV/f/9nQCzksiYMFgsjIYyNHefo/eoE148dZ/W+PejCoMD1HAPtpwH4cdsuAPQkc6MRUBSF9vZ2RkdHURSFqqoqXC7XuwMDAxdqampOAcIUEoJwnAF8XlqL+6MDsfZ7wzeZ6LvFze++B2C4s4vhzq6EuWEhCAmBJEnk5uaSnZ1NTk4Ouq5z7do1WltbTXa7fT+gAEj7Cp8SeWYlYRczUfL8aib6+tEeHsdcuBfReafrF7KyslBVFU3TCIVCBAIBNE0jPz+f5cuXPw5MyiHDYMzQ0i445r6cEfFMRI/A4XDE2pFIhGAwiNlsBrABk/IX2p9lgCXdYpqmVbjd7nPwIAPGXy5JkgisqUeqqkTe/Bq2pl3IspyQHRVFQVGUqF+O/kwS9zTiEQ6HcwoKCtLudkqAZdMmzMXFWPPyZhIlTdVRyF6vN5CO/CH8Vqs1rQBfbi7i/EWsBz/GYrHE/PFlvABT4nKpSdKZcDrx9fZhctjnHDsTCxZgMpmQJIlFDfVoSGStdM4p4D+JQASJIBKT33w7LwGZfg9Ue73egWSiougsqcLssGEAa65cQrbbk96BaJmVlVUDDD6SCNw+eJgAEivaTuC/P03fB3szjkDa55dqtzPbutfL4JGjLGt+H3udkzXnzuB+eSsTro2s2LsHgHvdfSh2G0Ub1pFX51y4gJn1wSNHEQ47RVs20XPgMOPuDny+aXw9N/G8uROBRHZZKUUb6rne8iUbW49Q8sK6f9bKkL/a7/fH7kBUwL3uXs64XgKgsGEthevrKVq/lvw6J4scdjyXO7n1dRsjv3bgGx5BsdtovHiWglUrkWW5BhjMNADVqqoKVVVFIBAQ9z1j4kLzbvEJNtHW8IoIBoMx0zQtZqFQSIRCIaHrutB1Xfw1OSXC4bCIRCICqIZ5HoEkSUzc6OVM49toXh/Ybbx4rCXl8cTffstjjoQxGQswmR48mPbGnXiH/wBg89FPcSwtTxCaSkB8OS8B0Uk+7zQaEq8e3k/dzrdSvo65iGNjMuSv1nU9IRGlIkxXn+GrAQb/dR5I5puLNBkWnIjm8j0qAarZbN4GlM6bITlGABXm8ecUWAJkPyIBKjAFBP4GIMQcOK2oAoUAAAAASUVORK5CYII="

                    },
                        {
                            "_id": "551bd8d98fe8ee54fe79fbe0",
                            "date": "2012-04-23T18:25:43.511Z",
                            "name": "test.pdf",
                            "uploader": "Karl Heinz",
                            "description": "test document",
                            "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABV0RVh0Q3JlYXRpb24gVGltZQA5LzExLzA24EiMeQAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNXG14zYAAATOSURBVFiF5ZddbJNVGMd/b/u+sG5dW8d0H+4L2UcGKUOjUBkD0QsVCSHGCSZEyIzGi92RyI3gBQYuIF440USYCULMdMEAGhMCKJZsZJAY2AfsI0Sy4bplG9LOvu3bt32PF9C69Wudwyv/ydNzznM+/v/znHOevIX/O6QMx1k8Ho8qhEAIARArASRJQpKkWXXDMNB1/afy8vKtgJ5SwOmldSJV50Lw9KWz+P1+rFarr6WlpfLQoUMTycbJQWGQXVg4y7nkmToApn67EWsHPGOonvGMyNWxMQzDwOv1Ultba2tubr4NLEsmQjpetkIskkyznNvvdANw/9YAP29r4vXuDgB+P3WWrt0fxvoB2ipWJggICYOGSz8wPj6Oy+UCYGRkZLqsrGwJccdh0oRBGDHLAE5WOJm+O0pl0w4Azm9v4gnXs5S/sSXWf7LCmTA3jEATRuxORFFaWpo7NDR0FZBnCQgaBroQswxg8ZPF5JQUE/T5ALh75SpD7aexlBQDsONODzvu9CTM1YUgaBgPwhsnorKyclV/f/9nQCzksiYMFgsjIYyNHefo/eoE148dZ/W+PejCoMD1HAPtpwH4cdsuAPQkc6MRUBSF9vZ2RkdHURSFqqoqXC7XuwMDAxdqampOAcIUEoJwnAF8XlqL+6MDsfZ7wzeZ6LvFze++B2C4s4vhzq6EuWEhCAmBJEnk5uaSnZ1NTk4Ouq5z7do1WltbTXa7fT+gAEj7Cp8SeWYlYRczUfL8aib6+tEeHsdcuBfReafrF7KyslBVFU3TCIVCBAIBNE0jPz+f5cuXPw5MyiHDYMzQ0i445r6cEfFMRI/A4XDE2pFIhGAwiNlsBrABk/IX2p9lgCXdYpqmVbjd7nPwIAPGXy5JkgisqUeqqkTe/Bq2pl3IspyQHRVFQVGUqF+O/kwS9zTiEQ6HcwoKCtLudkqAZdMmzMXFWPPyZhIlTdVRyF6vN5CO/CH8Vqs1rQBfbi7i/EWsBz/GYrHE/PFlvABT4nKpSdKZcDrx9fZhctjnHDsTCxZgMpmQJIlFDfVoSGStdM4p4D+JQASJIBKT33w7LwGZfg9Ue73egWSiougsqcLssGEAa65cQrbbk96BaJmVlVUDDD6SCNw+eJgAEivaTuC/P03fB3szjkDa55dqtzPbutfL4JGjLGt+H3udkzXnzuB+eSsTro2s2LsHgHvdfSh2G0Ub1pFX51y4gJn1wSNHEQ47RVs20XPgMOPuDny+aXw9N/G8uROBRHZZKUUb6rne8iUbW49Q8sK6f9bKkL/a7/fH7kBUwL3uXs64XgKgsGEthevrKVq/lvw6J4scdjyXO7n1dRsjv3bgGx5BsdtovHiWglUrkWW5BhjMNADVqqoKVVVFIBAQ9z1j4kLzbvEJNtHW8IoIBoMx0zQtZqFQSIRCIaHrutB1Xfw1OSXC4bCIRCICqIZ5HoEkSUzc6OVM49toXh/Ybbx4rCXl8cTffstjjoQxGQswmR48mPbGnXiH/wBg89FPcSwtTxCaSkB8OS8B0Uk+7zQaEq8e3k/dzrdSvo65iGNjMuSv1nU9IRGlIkxXn+GrAQb/dR5I5puLNBkWnIjm8j0qAarZbN4GlM6bITlGABXm8ecUWAJkPyIBKjAFBP4GIMQcOK2oAoUAAAAASUVORK5CYII="

                        },
                        {
                            "_id": "551bd8d98fe8ee54fe79fbe0",
                            "date": "2012-04-23T18:25:43.511Z",
                            "name": "test.pdf",
                            "uploader": "Karl Heinz",
                            "description": "test document",
                            "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABV0RVh0Q3JlYXRpb24gVGltZQA5LzExLzA24EiMeQAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNXG14zYAAATOSURBVFiF5ZddbJNVGMd/b/u+sG5dW8d0H+4L2UcGKUOjUBkD0QsVCSHGCSZEyIzGi92RyI3gBQYuIF440USYCULMdMEAGhMCKJZsZJAY2AfsI0Sy4bplG9LOvu3bt32PF9C69Wudwyv/ydNzznM+/v/znHOevIX/O6QMx1k8Ho8qhEAIARArASRJQpKkWXXDMNB1/afy8vKtgJ5SwOmldSJV50Lw9KWz+P1+rFarr6WlpfLQoUMTycbJQWGQXVg4y7nkmToApn67EWsHPGOonvGMyNWxMQzDwOv1Ultba2tubr4NLEsmQjpetkIskkyznNvvdANw/9YAP29r4vXuDgB+P3WWrt0fxvoB2ipWJggICYOGSz8wPj6Oy+UCYGRkZLqsrGwJccdh0oRBGDHLAE5WOJm+O0pl0w4Azm9v4gnXs5S/sSXWf7LCmTA3jEATRuxORFFaWpo7NDR0FZBnCQgaBroQswxg8ZPF5JQUE/T5ALh75SpD7aexlBQDsONODzvu9CTM1YUgaBgPwhsnorKyclV/f/9nQCzksiYMFgsjIYyNHefo/eoE148dZ/W+PejCoMD1HAPtpwH4cdsuAPQkc6MRUBSF9vZ2RkdHURSFqqoqXC7XuwMDAxdqampOAcIUEoJwnAF8XlqL+6MDsfZ7wzeZ6LvFze++B2C4s4vhzq6EuWEhCAmBJEnk5uaSnZ1NTk4Ouq5z7do1WltbTXa7fT+gAEj7Cp8SeWYlYRczUfL8aib6+tEeHsdcuBfReafrF7KyslBVFU3TCIVCBAIBNE0jPz+f5cuXPw5MyiHDYMzQ0i445r6cEfFMRI/A4XDE2pFIhGAwiNlsBrABk/IX2p9lgCXdYpqmVbjd7nPwIAPGXy5JkgisqUeqqkTe/Bq2pl3IspyQHRVFQVGUqF+O/kwS9zTiEQ6HcwoKCtLudkqAZdMmzMXFWPPyZhIlTdVRyF6vN5CO/CH8Vqs1rQBfbi7i/EWsBz/GYrHE/PFlvABT4nKpSdKZcDrx9fZhctjnHDsTCxZgMpmQJIlFDfVoSGStdM4p4D+JQASJIBKT33w7LwGZfg9Ue73egWSiougsqcLssGEAa65cQrbbk96BaJmVlVUDDD6SCNw+eJgAEivaTuC/P03fB3szjkDa55dqtzPbutfL4JGjLGt+H3udkzXnzuB+eSsTro2s2LsHgHvdfSh2G0Ub1pFX51y4gJn1wSNHEQ47RVs20XPgMOPuDny+aXw9N/G8uROBRHZZKUUb6rne8iUbW49Q8sK6f9bKkL/a7/fH7kBUwL3uXs64XgKgsGEthevrKVq/lvw6J4scdjyXO7n1dRsjv3bgGx5BsdtovHiWglUrkWW5BhjMNADVqqoKVVVFIBAQ9z1j4kLzbvEJNtHW8IoIBoMx0zQtZqFQSIRCIaHrutB1Xfw1OSXC4bCIRCICqIZ5HoEkSUzc6OVM49toXh/Ybbx4rCXl8cTffstjjoQxGQswmR48mPbGnXiH/wBg89FPcSwtTxCaSkB8OS8B0Uk+7zQaEq8e3k/dzrdSvo65iGNjMuSv1nU9IRGlIkxXn+GrAQb/dR5I5puLNBkWnIjm8j0qAarZbN4GlM6bITlGABXm8ecUWAJkPyIBKjAFBP4GIMQcOK2oAoUAAAAASUVORK5CYII="

                        }
                    ]);
                }, 500);
            });
        }

        static serviceId:string = "DocumentOverviewService";
    }
}
