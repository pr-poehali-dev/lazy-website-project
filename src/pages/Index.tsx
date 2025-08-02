import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-game-orange via-game-blue to-game-purple">
      {/* Header */}
      <header className="p-6 text-center">
        <h1 className="text-6xl font-bold text-white mb-4 animate-bounce-slow">
          я очень ленивый 😴
        </h1>
        <div className="flex justify-center gap-4 text-4xl">
          🎮 🍕 💤 🎯
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          
          {/* About Me Section */}
          <Card className="bg-white/90 backdrop-blur-sm border-2 border-game-mint shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold text-game-orange flex items-center justify-center gap-2">
                <Icon name="User" size={32} />
                Обо мне
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-6">
              <div className="text-6xl animate-wiggle">🛋️</div>
              <p className="text-2xl font-medium text-gray-800 leading-relaxed">
                играю в растик и кушаю горки
              </p>
              <div className="flex justify-center gap-4 text-4xl">
                🎮 ➡️ 🍕 ➡️ 😴
              </div>
              <Button className="bg-game-orange hover:bg-game-orange/80 text-white font-bold py-3 px-6 rounded-full text-lg transform hover:scale-110 transition-all">
                <Icon name="Heart" size={20} className="mr-2" />
                Это жизнь!
              </Button>
            </CardContent>
          </Card>

          {/* Hobbies Section */}
          <Card className="bg-white/90 backdrop-blur-sm border-2 border-game-blue shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold text-game-blue flex items-center justify-center gap-2">
                <Icon name="Gamepad2" size={32} />
                Хобби
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-6">
              <div className="grid grid-cols-2 gap-4 text-4xl">
                <div className="animate-bounce-slow">🎮</div>
                <div className="animate-wiggle">🍕</div>
                <div className="animate-bounce-slow" style={{animationDelay: '0.5s'}}>💤</div>
                <div className="animate-wiggle" style={{animationDelay: '0.3s'}}>🛋️</div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-game-mint/20 p-4 rounded-lg">
                  <h3 className="font-bold text-lg text-gray-800 mb-2">🎯 Любимые игры:</h3>
                  <p className="text-gray-700">Rust, стратегии, всё что не требует усилий</p>
                </div>
                
                <div className="bg-game-yellow/20 p-4 rounded-lg">
                  <h3 className="font-bold text-lg text-gray-800 mb-2">🍕 Любимая еда:</h3>
                  <p className="text-gray-700">Горки (доставка), чипсы, кола</p>
                </div>
              </div>

              <Button className="bg-game-blue hover:bg-game-blue/80 text-white font-bold py-3 px-6 rounded-full text-lg transform hover:scale-110 transition-all">
                <Icon name="Star" size={20} className="mr-2" />
                Топ лайфстайл!
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Meme Section */}
        <div className="mt-12 text-center">
          <Card className="bg-white/90 backdrop-blur-sm border-2 border-game-purple shadow-2xl max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-game-purple flex items-center justify-center gap-2">
                <Icon name="Laugh" size={32} />
                Мемы про лень
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Meme Images */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 p-4 rounded-lg hover:scale-105 transition-transform">
                  <img 
                    src="/img/a86f5a59-61f5-43c9-a4aa-d8b55d9b34a1.jpg" 
                    alt="Ленивый геймер"
                    className="w-full h-48 object-cover rounded-lg mb-3"
                  />
                  <p className="font-medium text-gray-800">"Мой идеальный рабочий день"</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg hover:scale-105 transition-transform">
                  <img 
                    src="/img/a0c6c2bd-d31d-45c6-885c-4faa3cde5890.jpg" 
                    alt="Эволюция лени"
                    className="w-full h-48 object-cover rounded-lg mb-3"
                  />
                  <p className="font-medium text-gray-800">"Эволюция лени в действии"</p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="bg-gray-100 p-6 rounded-lg hover:bg-gray-200 transition-all cursor-pointer">
                  <div className="text-6xl mb-4">😴</div>
                  <p className="font-medium">"Встаю в 2 дня - продуктивность 100%"</p>
                </div>
                
                <div className="bg-gray-100 p-6 rounded-lg hover:bg-gray-200 transition-all cursor-pointer">
                  <div className="text-6xl mb-4">🎮</div>
                  <p className="font-medium">"Игры - это не хобби, это образ жизни"</p>
                </div>
                
                <div className="bg-gray-100 p-6 rounded-lg hover:bg-gray-200 transition-all cursor-pointer">
                  <div className="text-6xl mb-4">🍕</div>
                  <p className="font-medium">"Готовить? Есть доставка!"</p>
                </div>
              </div>
              
              <div className="text-2xl font-bold text-gray-800 animate-pulse">
                Лень - двигатель прогресса! 🚀
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-8 text-white">
        <div className="flex justify-center gap-4 text-2xl mb-4">
          <span className="animate-bounce-slow">🎮</span>
          <span className="animate-wiggle">💤</span>
          <span className="animate-bounce-slow" style={{animationDelay: '0.5s'}}>🍕</span>
        </div>
        <p className="text-lg font-medium">Сайт создан с максимальной ленью 😄</p>
      </footer>
    </div>
  );
}