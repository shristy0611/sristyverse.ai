import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import type { Engine } from 'tsparticles-engine';

export const NeuralNetwork = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="neural-network"
      init={particlesInit}
      className="absolute inset-0"
      options={{
        fpsLimit: 60,
        fullScreen: { enable: false },
        background: {
          color: 'transparent'
        },
        particles: {
          color: {
            value: [
              '#00ffff', // Cyan
              '#ff00ff', // Magenta
              '#3B82F6', // Blue
              '#8B5CF6', // Purple
              '#06B6D4'  // Light Blue
            ],
            animation: {
              enable: true,
              speed: 20,
              sync: false
            }
          },
          collisions: {
            enable: true,
            mode: 'bounce'
          },
          links: {
            color: {
              value: ['#00ffff', '#ff00ff', '#3B82F6'],
            },
            distance: 150,
            enable: true,
            opacity: 0.8,
            width: 2,
            triangles: {
              enable: true,
              opacity: 0.3,
              color: '#8B5CF6'
            }
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: {
              default: 'bounce'
            },
            random: false,
            speed: 2,
            straight: false,
            trail: {
              enable: true,
              length: 5,
              fillColor: '#000'
            },
            attract: {
              enable: true,
              rotateX: 1200,
              rotateY: 1500
            }
          },
          number: {
            density: {
              enable: true,
              area: 800
            },
            value: 100,
            limit: 120
          },
          opacity: {
            value: 1,
            random: false,
            animation: {
              enable: true,
              speed: 1,
              minimumValue: 0.8,
              sync: false,
              startValue: "max",
              destroy: "none"
            }
          },
          shape: {
            type: ['circle', 'triangle'],
          },
          size: {
            value: { min: 3, max: 5 },
            animation: {
              enable: true,
              speed: 2,
              minimumValue: 2,
              sync: false,
              startValue: "random",
              destroy: "none"
            }
          },
          twinkle: {
            particles: {
              enable: true,
              frequency: 0.05,
              opacity: 1,
              color: {
                value: ['#00ffff', '#ff00ff']
              }
            },
            lines: {
              enable: true,
              frequency: 0.05,
              opacity: 1
            }
          },
          life: {
            duration: {
              sync: false,
              value: -1 // Negative value for infinite life
            },
            count: 0, // 0 for infinite particles
          },
          rotate: {
            animation: {
              enable: true,
              speed: 5,
              sync: false
            }
          },
          tilt: {
            enable: true,
            animation: {
              enable: true,
              speed: 5,
              sync: false
            }
          }
        },
        interactivity: {
          detectsOn: "window",
          events: {
            onHover: {
              enable: true,
              mode: ['grab', 'bubble', 'connect'],
              parallax: {
                enable: true,
                force: 60,
                smooth: 10
              }
            },
            onClick: {
              enable: true,
              mode: ['push', 'repulse']
            },
            resize: {
              enable: true,
              delay: 0.5
            }
          },
          modes: {
            grab: {
              distance: 300,
              links: {
                opacity: 1,
                color: '#ff00ff'
              }
            },
            bubble: {
              distance: 250,
              size: 15,
              duration: 2,
              opacity: 1,
              color: {
                value: '#00ffff'
              }
            },
            push: {
              quantity: 8,
              size: 5
            },
            repulse: {
              distance: 300,
              duration: 1
            },
            connect: {
              distance: 200,
              links: {
                opacity: 0.7
              },
              radius: 120
            }
          }
        },
        detectRetina: true,
        themes: [
          {
            name: 'light',
            default: {
              value: false,
              mode: 'light'
            },
            options: {
              background: {
                color: 'transparent'
              },
              particles: {
                color: {
                  value: ['#00ffff', '#ff00ff', '#3B82F6', '#8B5CF6', '#06B6D4']
                }
              }
            }
          }
        ]
      }}
    />
  );
}; 