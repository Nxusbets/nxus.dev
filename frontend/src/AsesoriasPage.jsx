import { Box, Heading, Text, VStack } from '@chakra-ui/react';

export default function AsesoriasPage() {
  return (
    <Box py={16} px={6} maxW="container.md" mx="auto">
      <VStack spacing={6} align="stretch">
        <Heading size="xl" color="teal.700">Asesorías Empresariales</Heading>
        <Text fontSize="lg" color="gray.700">
          Brindamos consultoría estratégica para la transformación digital y el crecimiento empresarial. Nuestro equipo acompaña a las organizaciones en la definición de objetivos, optimización de procesos y adopción de tecnologías innovadoras, asegurando resultados sostenibles y competitivos.
        </Text>
        <Heading size="md" color="teal.600" mt={6}>Consultoría Personalizada</Heading>
        <Text fontSize="md" color="gray.600">
          Realizamos diagnósticos, capacitaciones, implementación de soluciones y seguimiento continuo, adaptándonos a los retos y oportunidades de cada cliente para maximizar su potencial.
        </Text>
      </VStack>
    </Box>
  );
}
